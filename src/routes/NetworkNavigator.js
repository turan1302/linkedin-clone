import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Network from '../screens/Network';

const Stack = createNativeStackNavigator();

const NetworkNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Network"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Network" component={Network} />
        </Stack.Navigator>
    );
};

export default NetworkNavigator;