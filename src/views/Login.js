import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginView = ({ onLogin }) => { // Accept onLogin prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLoginPress = () => {
        onLogin(username, password); // Call the onLogin prop with the username and password
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
                <Button title="Login" onPress={handleLoginPress} color="grey" />
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
