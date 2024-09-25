import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/views/Home';
import Services from './src/views/service';
import Hairstyle from './src/views/Hairstyle';
import Staff from './src/views/Staff';
import AboutUs from './src/views/AboutUs';
import Staffbooking from './src/book/Staffbooking';
import Splash from './src/views/Splash';
import LoginView from './src/views/Login'; 
import SignUp from './src/views/SignUp';
import Books from './src/book/Books';

const Stack = createStackNavigator();

export default function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const fetchData = async () => {
        try {
            const token = await AsyncStorage.getItem('token'); 
            if (!token) {
                setError('You are not logged in');
                return;
            }

            const response = await axios.get('http://10.0.2.2:3000/api/data', {  
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });

            setData(response.data);
        } catch (err) {
            setError('Error fetching data.');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/api/login', { email: username, password });
            if (response.data.token) {
                await AsyncStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                fetchData();
            } else {
                setError('Login failed, please try again.');
            }
        } catch (err) {
            setError('Login failed, please check your credentials.');
        }
    };

    const handleSignOut = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setData([]);
            setToken(null);
        } catch (err) {
            setError('Error signing out.');
        }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Login" 
                    options={{ headerShown: false }} 
                    children={() => <LoginView onLogin={handleLogin} />} // Use children correctly
                />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Home" options={{ headerShown: false }}>
                    {() => <Home data={data} onSignOut={handleSignOut} />}
                </Stack.Screen>
                <Stack.Screen name="Services" component={Services} />
                <Stack.Screen name="Hairstyle" component={Hairstyle} />
                <Stack.Screen name="Staff" component={Staff} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="Books" component={Books} />
            </Stack.Navigator>

            {error && (
                <View>
                    <Text style={{ color: 'red', textAlign: 'center' }}>
                        {error}
                    </Text>
                </View>
            )}
        </NavigationContainer>
    );
}
