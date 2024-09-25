import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Modal, FlatList, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isBarberModalVisible, setIsBarberModalVisible] = useState(false);
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // Success modal state

  const barbers = ['John', 'Arnold', 'Michael', 'Manny'];
  const services = ['Fade', 'Low Taper', 'Classic Hair', 'Color Specialist', 'Highlight Color', 'Buzz Cut'];

  const handleBooking = () => {
    if (name && email && phone && service && barber) {
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      console.log('Booking Details:', { name, email, phone, date: formattedDate, service, barber });
      setIsSuccessModalVisible(true); // Show success notification
    } else {
      alert('Please fill in all the fields.');
    }
  };

  const selectBarber = (selectedBarber) => {
    setBarber(selectedBarber);
    setIsBarberModalVisible(false);
  };

  const selectService = (selectedService) => {
    setService(selectedService);
    setIsServiceModalVisible(false);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    const hours = currentTime.getHours();
    
    if (hours < 9) {
      currentTime.setHours(9, 0);
    } else if (hours > 20) {
      currentTime.setHours(20, 0);
    }

    setShowTimePicker(false);
    setDate(currentTime);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/423247682_805205928291883_4389632146282746689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJrSRnypADNrVJqHXb06Dl0s4bLwnBGfHSzhsvCcEZ8ZEloiogm3rbkKN_Rf5oPBuHH5SdJxEwHeKLVTT2YKA4&_nc_ohc=2LMIYfhUlSEQ7kNvgEUOEKG&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCJ26JS-bWzBGWPLZFBVPoaavCBv0Q8RarjQNXgoC2OYA&oe=66F568F4' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Book an Appointment</Text>

          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Date"
              value={date.toLocaleDateString()}
              editable={false}
              placeholderTextColor="#ccc"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Time"
              value={date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              editable={false}
              placeholderTextColor="#ccc"
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#ccc"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#ccc"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor="#ccc"
          />

          <TouchableOpacity onPress={() => setIsServiceModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Service"
              value={service}
              editable={false}
              placeholderTextColor="#ccc"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsBarberModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Barber's Name"
              value={barber}
              editable={false}
              placeholderTextColor="#ccc"
            />
          </TouchableOpacity>

          <Modal visible={isBarberModalVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select a Barber</Text>
                <FlatList
                  data={barbers}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => selectBarber(item)} style={styles.barberItem}>
                      <Text style={styles.barberText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
                <Button title="Cancel" onPress={() => setIsBarberModalVisible(false)} />
              </View>
            </View>
          </Modal>

          <Modal visible={isServiceModalVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select a Service</Text>
                <FlatList
                  data={services}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => selectService(item)} style={styles.barberItem}>
                      <Text style={styles.barberText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
                <Button title="Cancel" onPress={() => setIsServiceModalVisible(false)} />
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>

          {/* Success Modal */}
          <Modal visible={isSuccessModalVisible} transparent={true} animationType="fade">
            <View style={styles.successModalContainer}>
              <View style={styles.successModalContent}>
                <Text style={styles.successMessage}>Booking Successful!</Text>
                <Button title="OK" onPress={() => setIsSuccessModalVisible(false)} />
              </View>
            </View>
          </Modal>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  barberItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  barberText: {
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#D3D3D3', // Match the button color to your theme
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  successModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default BookingPage;
