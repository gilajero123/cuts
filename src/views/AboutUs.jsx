import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.paragraph}>
            Established in 2021, our barbershop was founded with one mission in mind: to deliver top-tier grooming services with unmatched precision and quality.
          </Text>
          <Text style={styles.paragraph}>
            At our shop, we take pride in creating fresh fades and sharp cuts that not only look great but also give you confidence.
          </Text>
          <Text style={styles.paragraph}>
            With a commitment to staying at the forefront of modern barbering techniques, our team ensures that every client leaves feeling and looking their best.
          </Text>
          <Text style={styles.paragraph}>
            Precision, quality, and fresh fades—these are more than just words; they are the foundation of everything we do.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  background: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutUs;
