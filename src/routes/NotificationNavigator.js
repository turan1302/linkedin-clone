import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from '../screens/Notifications';

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Notifications"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
};

export default NotificationNavigator;