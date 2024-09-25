import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Array of staff data
const staff = [
  { 
    name: 'Johnny', 
    role: 'Barber Expert', 
    bio: 'John has over 15 years of experience in precision haircuts and styling.',
    image: 'https://th.bing.com/th/id/OIP.3CaQywzTFINwOHepml0_yQHaHR?pid=ImgDet&w=184&h=181&c=7&dpr=1.3'
  },
  { 
    name: 'Arnold', 
    role: 'Barber & Color Specialist', 
    bio: 'Arnold is known for her expertise in modern hair coloring techniques.',
    image: 'https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg'
  },
  { 
    name: 'Michael', 
    role: 'Barber Expert', 
    bio: 'Michael is famous for his flawless fades and trendy styles.',
    image: ''
  },
  { 
    name: 'Manny', 
    role: 'Stylist', 
    bio: 'Manny specializes in trendy haircuts and styling.',
    image: 'https://th.bing.com/th/id/OIP.VARy07xazxwgWZw7eb3jXAHaJ8?w=141&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9; // Slightly adjust width for vertical layout
const CARD_HEIGHT = 300; 

const StaffGallery = () => {
  const navigation = useNavigation(); // Use navigation

  const bookAppointment = (staffName) => {
    // Navigate to the Books screen and pass staff name as a parameter
    navigation.navigate('Books', { staffName });
  };

  const renderStaffItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => bookAppointment(item.name)} // Trigger navigation
          >
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'data:image/jpeg;base64,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' }}
      style={styles.background}
    >
      <FlatList
        data={staff}
        renderItem={renderStaffItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20, // Space between cards in vertical layout
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  bio: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  bookButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#333', 
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default StaffGallery;
