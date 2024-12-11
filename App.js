import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
        
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.profileSection}>
            <Image
              source={ require('./assets/IMG_2644.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Raj Trusharkumar Patel</Text>
            <Text style={styles.tagline}> Designer | Developer</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>About Me</Text>
            <Text style={styles.text}>
            I am a passionate software developer with a knack for creating intuitive and visually stunning
            mobile applications. When I'm not coding, you'll find me exploring photography, hiking, or curating playlists.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Contact</Text>
            <Text style={styles.text}>📧 Email: rajpatel9801.ca@gmail.com</Text>
            <Text style={styles.text}>📱 Phone: +1 (431) 541-9801</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Skills</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skill}>React Native</Text>
              <Text style={styles.skill}>Javascript</Text>
              <Text style={styles.skill}>UI/UX Design</Text>
              <Text style={styles.skill}>Backend Development</Text>
              <Text style={styles.skill}>Cloud Integration</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Hobbies</Text>
            <View style={styles.hobbiesContainer}>
              <Text style={styles.hobby}>🎨 Painting</Text>
              <Text style={styles.hobby}>📸 Photography</Text>
              <Text style={styles.hobby}>🌍 Traveling</Text>
              <Text style={styles.hobby}>🎵 Music</Text>
            </View>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#000',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingTop: 50,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#000',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#d1d8e0',
    marginTop: 5,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#f5f5f5',
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  skill: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    textAlign: 'center',
    overflow: 'hidden',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  hobby: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    textAlign: 'center',
    overflow: 'hidden',
  },
});
