import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Bio</Text>
        <Text style={styles.subHeader}>Full Name:</Text>
        <Text style={styles.text}>Your Full Name</Text>

        <Text style={styles.subHeader}>Contact Info:</Text>
        <Text style={styles.text}>Email: your.email@example.com</Text>
        <Text style={styles.text}>Phone: +1 (123) 456-7890</Text>

        <Text style={styles.subHeader}>Interests:</Text>
        <Text style={styles.text}>- Coding</Text>
        <Text style={styles.text}>- Reading</Text>
        <Text style={styles.text}>- Gaming</Text>

        <Text style={styles.subHeader}>Professional Skills:</Text>
        <Text style={styles.text}>- React Native</Text>
        <Text style={styles.text}>- JavaScript</Text>
        <Text style={styles.text}>- UI/UX Design</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
