import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOut = ({ navigation }) => {
    const handleSignOut = async () => {
        try {
            // Remove the token from AsyncStorage
            await AsyncStorage.removeItem('token');
            // Navigate to the Login screen
            navigation.navigate('Login');
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    return (
        <View>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

export default SignOut;
