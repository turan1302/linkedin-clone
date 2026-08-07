import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from '../screens/CreatePost';

const Stack = createNativeStackNavigator();

const PostNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CreatePost"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
    );
};

export default PostNavigator;