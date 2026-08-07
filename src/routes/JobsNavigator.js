import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../screens/Jobs';

const Stack = createNativeStackNavigator();

const JobsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Jobs"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Jobs" component={Jobs} />
        </Stack.Navigator>
    );
};

export default JobsNavigator;