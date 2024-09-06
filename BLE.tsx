import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableHighlight,
    Pressable,
    NativeEventEmitter,
    NativeModules,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BleManager, { BleScanCallbackType, BleScanMatchMode, BleScanMode, Peripheral } from 'react-native-ble-manager';
import { useNavigation } from '@react-navigation/native';
import {
    sleep,
    swapEndianWithColon,
    handleAndroidPermissions,
    handleStopScan,
    handleDisconnectedPeripheral,
    handleDiscoverPeripheral,
    retrieveConnected,
    connectPeripheral
} from './utils';
const BleManagerModule = NativeModules.BleManager;

const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const SERVICE_UUIDS: string[] = [];
const SECONDS_TO_SCAN_FOR = 3;
const ALLOW_DUPLICATES = true;

const BLE = () => {
    const navigation = useNavigation();
    const [isScanning, setIsScanning] = useState(false);
    const [peripherals, setPeripherals] = useState(new Map<string, Peripheral>());
    const [serviceData, setServiceData] = useState({});

    const startScan = () => {
        if (!isScanning) {
            setPeripherals(new Map<string, Peripheral>());

            try {
                setIsScanning(true);
                BleManager.scan(SERVICE_UUIDS, SECONDS_TO_SCAN_FOR, ALLOW_DUPLICATES, {
                    matchMode: BleScanMatchMode.Sticky,
                    scanMode: BleScanMode.LowLatency,
                    callbackType: BleScanCallbackType.AllMatches,
                })
                    .then(() => console.log('[startScan] Scan started.'))
                    .catch((err) => console.error('[startScan] Scan error:', err));
            } catch (error) {
                console.error('[startScan] BLE scan error thrown', error);
            }
        }
    };

    const togglePeripheralConnection = async (peripheral: Peripheral) => {
        if (peripheral && peripheral.connected) {
            try {
                await BleManager.disconnect(peripheral.id);
            } catch (error) {
                console.error(`[togglePeripheralConnection][${peripheral.id}] Disconnect error:`, error);
            }
        } else {
            await connectPeripheral(peripheral, setPeripherals, setServiceData);
        }
    };

    useEffect(() => {
        console.log(swapEndianWithColon('AQKxVSBnbOu+LA=='));

        BleManager.start({ showAlert: false })
            .then(() => console.log('BleManager started.'))
            .catch((error) => console.error('BleManager start error:', error));

        const listeners = [
            bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', (peripheral) =>
                handleDiscoverPeripheral(peripheral, setPeripherals),
            ),
            bleManagerEmitter.addListener('BleManagerStopScan', () => handleStopScan(setIsScanning)),
            bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', (event) =>
                handleDisconnectedPeripheral(event, setPeripherals),
            ),
        ];

        handleAndroidPermissions();

        return () => {
            console.log('[app] Removing listeners on unmount.');
            listeners.forEach((listener) => listener.remove());
        };
    }, []);
    const renderItem = ({ item }: { item: Peripheral }) => {
        console.log(JSON.stringify(item))
        const backgroundColor = item.connected ? '#069400' : Colors.white;
        return (
            <TouchableHighlight
                underlayColor="#0082FC"
                onPress={() => item.connected ?
                    navigation.navigate('BLEDetails', { serviceData: serviceData, title: serviceData.name }) :
                    togglePeripheralConnection(item)}>
                <View style={[styles.row, { backgroundColor }]}>
                    <Text style={styles.peripheralName}>
                        {/* completeLocalName (item.name) & shortAdvertisingName (advertising.localName) may not always be the same */}
                        {item.name} - {item?.advertising?.localName}
                        {item.connecting && ' - Connecting...'}
                    </Text>
                    <Text style={styles.rssi}>RSSI: {item.rssi}</Text>
                    <Text style={styles.peripheralId}>{item.id}</Text>
                </View>
            </TouchableHighlight>
        );
    };
    return (
        <SafeAreaView style={styles.body}>
            {/* <StatusBar barStyle="dark-content" /> */}
            <View style={styles.body}>
                <View style={{ marginVertical: 5 }}>
                    <Pressable
                        onPress={startScan}
                        style={styles.scanButton}>
                        <Text>Scan Bluetooth ({isScanning ? 'on' : 'off'})</Text>
                    </Pressable>
                </View>

                <View style={{ marginVertical: 5 }}>
                    <Pressable
                        onPress={() => retrieveConnected(setPeripherals)}
                        style={styles.scanButton}>
                        <Text>Retrieve connected peripherals</Text>
                    </Pressable>
                </View>

                <FlatList
                    data={Array.from(peripherals.values())}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};
const boxShadow = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

const styles = StyleSheet.create({
    scanButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        backgroundColor: '#0a398a',
        margin: 10,
        borderRadius: 12,
        ...boxShadow,
    },
    body: {
        backgroundColor: '#0082FC',
        flex: 1,
    },
  
    textName: {
        fontSize: 16,
    },
    textRssi: {
        fontSize: 12,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    peripheralName: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: 'black'
    },
    rssi: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        color: 'black'
    },
    peripheralId: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        paddingBottom: 20,
        color: 'black'
    },
    row: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        ...boxShadow,
        marginVertical:10
    },
    noPeripherals: {
        margin: 10,
        textAlign: 'center',
        color: Colors.white,
    },
});

export default BLE;
