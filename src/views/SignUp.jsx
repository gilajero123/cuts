import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Check if any field is empty
    if (!username || !password || !confirmPassword || !firstName || !lastName || !age || !email || !location || !number) {
      alert("All fields are required!");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Check if age is a valid number
    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid age!");
      return;
    }

    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Check if phone number is valid
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone numbers
    if (!phoneRegex.test(number)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    // Successful sign-up
    alert("You are successfully signed up!");
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.header}>Sign Up</Text>

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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={number}
            onChangeText={setNumber}
            keyboardType="phone-pad"
            placeholderTextColor="#aaa"
          />

          <Button title="Sign Up" onPress={handleSignUp} color="#1E90FF" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Make the form background semi-transparent
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center', // Center content inside the form
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Text color
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default SignUpView;
