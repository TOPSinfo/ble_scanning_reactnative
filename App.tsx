import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BLEDetails from './BLEDetails';
import BLE from './BLE';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="BLE" options={{headerShown:false}} component={BLE} />
        <Stack.Screen name="BLEDetails" component={BLEDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App