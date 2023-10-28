
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Scanner from './Scanner';

export default function App() {
  const [enrollment, setEnrollment] = useState(null);
  const [name, setName] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [canPressButton, setCanPressButton] = useState(true);

  const handleButtonPress = () => {
    // Logic to handle the button press event
    console.log('Scanned Data:', scannedData);
   
    if(scannedData == "WrongValue") {
      alert("Wrong QR, Scan again!")
    }
    else{
      alert("Success, attendance was sent. You cannot send another request for the next 30 seconds.")
      setCanPressButton(false);
      setTimeout(() => {
        setCanPressButton(true);
      }, 10000); // 5000 milliseconds = 5 seconds
    }
  };
  const buttonTimeSelect = () => {
    if(canPressButton)
    {
      handleButtonPress();
    }
    else
    {
      alert("you cannot press this button");
    }
  } 

  return (
    <>
    <Scanner onScanned={setScannedData} />
    <View style={styles.container}>
      <Text style={styles.text}>Attendance</Text>
      <View style={styles.cuntainer}>
      <View style={styles.rectangle}>
        <Text style={styles.test}>Enrollment Number</Text>
        <TextInput
          style={styles.input}
          value={enrollment}
          placeholder="Enrollment Number here"
          placeholderTextColor="#cdd0d4"
          onChangeText={text => setEnrollment(text)}
        />
        <Text style={styles.test}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Name here"
          placeholderTextColor="#cdd0d4"
          onChangeText={text => setName(text)}
        />
      </View>
      </View>
      
      
      <TouchableOpacity style={styles.button} onPress={buttonTimeSelect}>
        <Text style={styles.buttonText}>Press Me to Scan</Text>
      </TouchableOpacity>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4252',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  cuntainer: {
    flex: 1,
    backgroundColor: '#3B4252',
    alignItems: 'center',
    top: 250,
    //justifyContent: 'center',
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
});
