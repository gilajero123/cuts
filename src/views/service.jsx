import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';

export default function Services() {
  const servicesList = [
    {
      title: "Men's Haircut",
      description: "Clean-Up Price Vary",
      duration: "30 Minutes",
      price: "₱150"
    },
    {
      title: "Men's Haircut & Beard Trim",
      description: "Haircut + Beard Cleanup",
      duration: "45 Minutes",
      price: "₱150"
    },
    {
      title: "Men's Haircut & Shave",
      description: "Haircut + Hot Shave w. Towel",
      duration: "60 Minutes",
      price: "₱150"
    },
    {
      title: "Beard Trim",
      description: "Beard Trim + Shape Up",
      duration: "30 Minutes",
      price: "₱150"
    },
    {
      title: "Hot Towel Shave",
      description: "Hot Towel + Straight Razor Shave",
      duration: "30 Minutes",
      price: "₱150"
    },
    {
      title: "Kid's Haircut",
      description: "Haircut for Kid's 10 & Under",
      duration: "30 Minutes",
      price: "₱150"
    },
    {
      title: "Men's Haircut & Color",
      description: "Haircut + Grey Coverage",
      duration: "30 Minutes",
      price: "₱150",
      note: "* Markus Joeright Only"
    },
    {
      title: "Men's Color",
      description: "Grey Coverage",
      duration: "30 Minutes",
      price: "₱150",
      note: "* Markus Joeright Only"
    },
    {
      title: "Facial Treatment",
      description: "Facial Exfoliation + Cleaning Treatment",
      duration: "30 Minutes",
      price: "₱150",
      note: "* Rebecca Britz  & Lindsay Giomini Only"
    }
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Our Services</Text>
        {servicesList.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <Text style={styles.serviceDuration}>{service.duration}</Text>
            <Text style={styles.servicePrice}>{service.price}</Text>
            {service.note && <Text style={styles.serviceNote}>{service.note}</Text>}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better readability
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White color for better contrast
    textAlign: 'center',
  },
  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light semi-transparent background
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  serviceDuration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  serviceNote: {
    fontSize: 12,
    color: '#888',
  },
});
