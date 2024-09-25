import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Use replace to prevent going back to Splash
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.splashText}></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: overlay to enhance text visibility
    padding: 20,
    borderRadius: 10,
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Splash;
