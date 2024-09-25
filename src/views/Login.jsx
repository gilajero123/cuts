// src/views/Login.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        // Set the onLogin function in the navigation options
        navigation.setOptions({
            onLogin: handleLogin,
        });
    }, [navigation, username, password]); // Added username and password to dependency array

    const handleLogin = () => {
        // Logic for handling login can go here
        // You can call a prop function or perform navigation
        console.log('Logging in with:', username, password);
        // Example: navigation.navigate('Home');
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp'); 
    };

    return (
        <ImageBackground
            source={{ uri: 'https://your-image-url.com' }} // Replace with your actual image URL
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#aaa"
                />
                <Button title="Login" onPress={handleLogin} color="grey" />
                <TouchableOpacity onPress={handleSignUp} style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: { flex: 1, justifyContent: 'center', padding: 20 },
    container: { backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10, padding: 20 },
    header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 15, backgroundColor: '#fff' },
    signupContainer: { marginTop: 20, alignItems: 'center' },
    signupText: { color: '#1E90FF', fontSize: 16 },
});

export default LoginView;
