import BleManager, {
    BleDisconnectPeripheralEvent,
    BleManagerDidUpdateValueForCharacteristicEvent,
    Peripheral,
} from 'react-native-ble-manager';
import { Platform, PermissionsAndroid } from 'react-native';

// Utility function for sleeping (used in async logic)
export const sleep = (ms: number) => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

// Convert string to the desired endian format
export const swapEndianWithColon = (str: string): string => {
    let format = '';
    let len = str.length;
    for (let j = 2; j <= len; j += 2) {
        format += str.substring(len - j, len - (j - 2));
        if (j != len) format += ':';
    }
    return format.toUpperCase();
};

// Android permission handling
export const handleAndroidPermissions = () => {
    if (Platform.OS === 'android' && Platform.Version >= 31) {
        PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        ]).then((result) => {
            if (result) {
                console.log(
                    '[handleAndroidPermissions] User accepts runtime permissions android 12+',
                );
            } else {
                console.error(
                    '[handleAndroidPermissions] User refuses runtime permissions android 12+',
                );
            }
        });
    } else if (Platform.OS === 'android' && Platform.Version >= 23) {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(
            (checkResult) => {
                if (checkResult) {
                    console.log(
                        '[handleAndroidPermissions] Runtime permission Android <12 already OK',
                    );
                } else {
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    ).then((requestResult) => {
                        if (requestResult) {
                            console.log(
                                '[handleAndroidPermissions] User accepts runtime permission android <12',
                            );
                        } else {
                            console.error(
                                '[handleAndroidPermissions] User refuses runtime permission android <12',
                            );
                        }
                    });
                }
            },
        );
    }
};

// BLE Event Handlers
export const handleStopScan = (setIsScanning: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsScanning(false);
    console.log('[handleStopScan] Scan is stopped.');
};

export const handleDisconnectedPeripheral = (
    event: BleDisconnectPeripheralEvent,
    setPeripherals: React.Dispatch<React.SetStateAction<Map<string, Peripheral>>>,
) => {
    console.log(`[handleDisconnectedPeripheral][${event.peripheral}] Disconnected.`);
    setPeripherals((map) => {
        let p = map.get(event.peripheral);
        if (p) {
            p.connected = false;
            return new Map(map.set(event.peripheral, p));
        }
        return map;
    });
};

export const handleDiscoverPeripheral = (
    peripheral: Peripheral,
    setPeripherals: React.Dispatch<React.SetStateAction<Map<string, Peripheral>>>,
) => {
    console.log('[handleDiscoverPeripheral] New BLE peripheral=', peripheral);
    if (!peripheral.name) {
        peripheral.name = 'NO NAME';
    }
    setPeripherals((map) => new Map(map.set(peripheral.id, peripheral)));
};

export const retrieveConnected = async (
    setPeripherals: React.Dispatch<React.SetStateAction<Map<string, Peripheral>>>,
) => {
    try {
        const connectedPeripherals = await BleManager.getConnectedPeripherals();
        if (connectedPeripherals.length === 0) {
            console.warn('[retrieveConnected] No connected peripherals found.');
            return;
        }
        connectedPeripherals.forEach((peripheral) => {
            setPeripherals((map) => {
                let p = map.get(peripheral.id);
                if (p) {
                    p.connected = true;
                    return new Map(map.set(p.id, p));
                }
                return map;
            });
        });
    } catch (error) {
        console.error('[retrieveConnected] Unable to retrieve connected peripherals.', error);
    }
};

// Connect to peripheral
export const connectPeripheral = async (
    peripheral: Peripheral,
    setPeripherals: React.Dispatch<React.SetStateAction<Map<string, Peripheral>>>,
    setServiceData: React.Dispatch<React.SetStateAction<any>>,
) => {
    try {
        if (peripheral) {
            setPeripherals((map) => {
                let p = map.get(peripheral.id);
                if (p) {
                    p.connecting = true;
                    return new Map(map.set(p.id, p));
                }
                return map;
            });

            await BleManager.connect(peripheral.id);
            console.log(`[connectPeripheral][${peripheral.id}] connected.`);

            setPeripherals((map) => {
                let p = map.get(peripheral.id);
                if (p) {
                    p.connecting = false;
                    p.connected = true;
                    return new Map(map.set(p.id, p));
                }
                return map;
            });

            await sleep(900);

            const peripheralData = await BleManager.retrieveServices(peripheral.id);
            console.log(
                `[connectPeripheral][${peripheral.id}] retrieved peripheral services`,
                JSON.stringify(peripheralData),
            );
            if (peripheralData) setServiceData(peripheralData);

            const rssi = await BleManager.readRSSI(peripheral.id);
            console.log(`[connectPeripheral][${peripheral.id}] retrieved current RSSI value: ${rssi}.`);

            setPeripherals((map) => {
                let p = map.get(peripheral.id);
                if (p) {
                    p.rssi = rssi;
                    return new Map(map.set(p.id, p));
                }
                return map;
            });
        }
    } catch (error) {
        console.error(`[connectPeripheral][${peripheral.id}] ConnectPeripheral error`, error);
    }
};
