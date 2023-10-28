//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Scanner from './Scanner';
import PostComponent from './PostComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [enrollment, setEnrollment] = useState('');
  const [name, setName] = useState('');
  const [scannedData, setScannedData] = useState(null);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false); // New state to track button click
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedEnrollment = await AsyncStorage.getItem('enrollment');
      const storedName = await AsyncStorage.getItem('name');
      if (storedEnrollment && storedName) {
        setEnrollment(storedEnrollment);
        setName(storedName);
        setIsDataSaved(true);
        setSubmitClicked(true); // Indicate that data has been submitted
      }
    } catch (error) {
      console.log("Error retrieving data: ", error);
    }
  };
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
  const handleEnrollmentChange = text => {
    if (!submitClicked) {
      setEnrollment(text);
      setIsDataSaved(false);
    }
  };

  const handleNameChange = text => {
    if (!submitClicked) {
      setName(text);
      setIsDataSaved(false);
    }
  };

  const handleDataSubmit = async () => {
    try {
      if (enrollment !== '' || name !== '') {
        if (!isDataSaved && !submitClicked) {
          await AsyncStorage.setItem('enrollment', enrollment);
          await AsyncStorage.setItem('name', name);
          setIsDataSaved(true);
          setSubmitClicked(true);
        }
      }
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      
      <Scanner onScanned={setScannedData} />
      <Text style={styles.textattend}></Text>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.test}>Enrollment Number</Text>
            <TextInput
              style={styles.input}
              value={enrollment}
              placeholder="Enrollment Number"
              placeholderTextColor="#cdd0d4"
              onChangeText={handleEnrollmentChange}
              editable={!submitClicked} // Enable only if submit is not clicked
            />
            <Text style={styles.test}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Name here"
              placeholderTextColor="#cdd0d4"
              onChangeText={handleNameChange}
              editable={!submitClicked} // Enable only if submit is not clicked
            />
            {(!isDataSaved || !submitClicked) && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleDataSubmit}
                disabled={submitClicked}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
            
          </View>
          <Text style={styles.textattend}>Attendance</Text>
        </View>
        
        <PostComponent URL={scannedData} name={name} enrollment={enrollment} />
      </View>
    </ScrollView>
  );
}
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#3B4252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuntainer: {
    flex: 1,
    backgroundColor: '#3B4252',
    alignItems: 'center',
    top: 250,
  },
  rectangle: {
    width: '80%',
    backgroundColor: '#808080',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  test: {
    fontSize: 18,
    color: 'white',
    alignContent: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    marginBottom: -150,
    top: 40,
  },
  textattend: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#3B4252',
    marginBottom: -150,
    top: -400,
  },
});
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
