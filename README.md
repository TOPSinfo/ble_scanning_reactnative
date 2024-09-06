
### README.md


# BLE Demo

This repository contains a React Native component for managing Bluetooth Low Energy (BLE) devices using the `react-native-ble-manager` library. The component allows scanning, connecting, and interacting with BLE peripherals.

## Features

- Scan for BLE devices
- Connect to BLE devices
- Retrieve connected peripherals
- Display peripheral details
- Handle BLE events such as connection, disconnection, and characteristic updates

## Sample


![](https://github.com/TOPSinfo/ble_scanning_reactnative/blob/main/blemaneger.gif)

## Installation

To use this component, you need to install the following dependencies:

```sh
npm install react-native-ble-manager react-native-permissions @react-navigation/native
```

Additionally, ensure you have the necessary setup for React Native and the required permissions for BLE operations.

## Usage

To use the BLE component in your React Native project, import and include it in your component tree:

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BLE from './path/to/BLE';

const App = () => {
  return (
    <NavigationContainer>
      <BLE />
    </NavigationContainer>
  );
};

export default App;
```

## Code Overview

### State Management

- [`isScanning`](command:_github.copilot.openSymbolFromReferences?%5B%22isScanning%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A43%2C%22character%22%3A11%7D%7D%5D%5D "Go to definition"): Boolean state to track if scanning is in progress.
- [`peripherals`](command:_github.copilot.openSymbolFromReferences?%5B%22peripherals%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A44%2C%22character%22%3A11%7D%7D%5D%5D "Go to definition"): Map to store discovered peripherals.
- [`serviceData`](command:_github.copilot.openSymbolFromReferences?%5B%22serviceData%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A47%2C%22character%22%3A11%7D%7D%5D%5D "Go to definition"): Object to store service data of connected peripherals.

### Functions

- [`startScan`](command:_github.copilot.openSymbolFromReferences?%5B%22startScan%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A49%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Initiates the BLE scan.
- [`handleStopScan`](command:_github.copilot.openSymbolFromReferences?%5B%22handleStopScan%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A74%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Handles the stop scan event.
- [`handleDisconnectedPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22handleDisconnectedPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A79%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Handles the disconnection of a peripheral.
- [`handleConnectPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22handleConnectPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A95%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Handles the connection of a peripheral.
- [`handleUpdateValueForCharacteristic`](command:_github.copilot.openSymbolFromReferences?%5B%22handleUpdateValueForCharacteristic%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A99%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Handles updates to characteristic values.
- [`handleDiscoverPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22handleDiscoverPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A107%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Handles the discovery of a new peripheral.
- [`togglePeripheralConnection`](command:_github.copilot.openSymbolFromReferences?%5B%22togglePeripheralConnection%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A117%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Toggles the connection state of a peripheral.
- [`retrieveConnected`](command:_github.copilot.openSymbolFromReferences?%5B%22retrieveConnected%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A132%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition"): Retrieves currently connected peripherals.
- [`connectPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22connectPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A18%7D%7D%5D%5D "Go to definition"): Connects to a specific peripheral.
- [`sleep`](command:_github.copilot.openSymbolFromReferences?%5B%22sleep%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A187%2C%22character%22%3A22%7D%7D%5D%5D "Go to definition"): Utility function to pause execution for a specified time.
- [`swapEndianWithColon`](command:_github.copilot.openSymbolFromReferences?%5B%22swapEndianWithColon%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A248%2C%22character%22%3A13%7D%7D%5D%5D "Go to definition"): Utility function to format a string with colons.

### Event Listeners

- [`BleManagerDiscoverPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22BleManagerDiscoverPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A274%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Listener for discovering peripherals.
- [`BleManagerStopScan`](command:_github.copilot.openSymbolFromReferences?%5B%22BleManagerStopScan%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A277%2C%22character%22%3A43%7D%7D%5D%5D "Go to definition"): Listener for stopping the scan.
- [`BleManagerDisconnectPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22BleManagerDisconnectPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A279%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Listener for peripheral disconnection.
- [`BleManagerDidUpdateValueForCharacteristic`](command:_github.copilot.openSymbolFromReferences?%5B%22BleManagerDidUpdateValueForCharacteristic%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A283%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Listener for characteristic value updates.
- [`BleManagerConnectPeripheral`](command:_github.copilot.openSymbolFromReferences?%5B%22BleManagerConnectPeripheral%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A287%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Listener for peripheral connection.

### Permissions

Handles Android permissions for BLE operations, including runtime permissions for Android 12+.

### UI Components

- [`Pressable`](command:_github.copilot.openSymbolFromReferences?%5B%22Pressable%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A4%7D%7D%5D%5D "Go to definition"): Button to start scanning and retrieve connected peripherals.
- [`FlatList`](command:_github.copilot.openSymbolFromReferences?%5B%22FlatList%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A11%2C%22character%22%3A4%7D%7D%5D%5D "Go to definition"): Displays the list of discovered peripherals.
- [`TouchableHighlight`](command:_github.copilot.openSymbolFromReferences?%5B%22TouchableHighlight%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A4%7D%7D%5D%5D "Go to definition"): Handles peripheral item press events.

### Styles

Defines various styles for the component using [`StyleSheet`](command:_github.copilot.openSymbolFromReferences?%5B%22StyleSheet%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22external%22%3A%22file%3A%2F%2F%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22path%22%3A%22%2FVolumes%2FMac%2FProjects%2Fble_scanning_reactnative%2FBLE.tsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A4%7D%7D%5D%5D "Go to definition").

## License

This project is licensed under the MIT License.
```

This README provides a comprehensive overview of the BLE component, including its features, installation instructions, usage, and code structure.
