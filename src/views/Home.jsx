import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground, ScrollView, TextInput, Animated, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Home({ onSignOut }) { // Accept onSignOut as a prop
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }}
        style={styles.background}
        resizeMode="cover"
      >
        <Animated.ScrollView
          contentContainerStyle={styles.scrollContainer}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <Text style={styles.header}>Home</Text>

          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#aaa"
          />

          <View style={styles.gridContainer}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hairstyle')}>
                <Text style={styles.cardTitle}>Hairstyle</Text>
                <Text style={styles.cardDescription}>Stylish cuts for every occasion.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Staff')}>
                <Text style={styles.cardTitle}>G-CUT Staff</Text>
                <Text style={styles.cardDescription}>Our professional team.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Services')}>
                <Text style={styles.cardTitle}>Services</Text>
                <Text style={styles.cardDescription}>Special Services Cut</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AboutUs')}>
                <Text style={styles.cardTitle}>About Us</Text>
                <Text style={styles.cardDescription}>Learn more about us.</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button title="Sign Out" onPress={onSignOut} /> {/* Sign Out Button */}

        </Animated.ScrollView>

        {/* Footer with Our Location and Contact Us */}
        <View style={styles.footer}>
          <View style={styles.locationContainer}>
            <Text style={styles.footerTitle}>Our Location</Text>
            <Text style={styles.footerDescription}>Barber Street, Cebu City</Text>
            <Text style={styles.footerDescription}>Mon-Fri: 9 AM - 8 PM</Text>
            <Text style={styles.footerDescription}>Sat-Sun: 10 AM - 6 PM</Text>
          </View>

          <View style={styles.contactContainer}>
            <Text style={styles.footerTitle}>Contact Us</Text>
            <Text style={styles.footerDescription}>Phone: (123) 456-7890</Text>
            <Text style={styles.footerDescription}>Email: info@barbershop.com</Text>
            <Text style={styles.footerDescription}>Address: 1234 Barber Street, Grooming City</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: 100, // Add bottom padding to ensure content doesn't overlap with the footer
  },
  header: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  searchBar: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#333',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: Dimensions.get('window').width * 0.42,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 160,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#dcdcdc',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Optional: add background color
    paddingHorizontal: 10,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  footerDescription: {
    fontSize: 14,
    color: '#f0f0f0',
  },
  locationContainer: {
    flex: 1,
    paddingRight: 10,
  },
  contactContainer: {
    flex: 1,
    paddingLeft: 10,
  },
});
