import { StyleSheet, View, Text, TouchableOpacity, handleButtonPress } from 'react-native';
import React, { useState } from 'react';
import Scanner from './Scanner';
export default function App() {
  let enrollment = 2
  let name = "namehere"
  return (
      <>
      <View style={styles.container}>
      <Text style={styles.text}>Attendance</Text>
      <View style={styles.rectangle}>
      {/* <Text style={styles.text1}>Enrollment Number</Text>
      <Text style={styles.text2}>{enrollment}</Text>
      <Text style={styles.text3}>Name</Text>
    <Text style={styles.text4}>{name}</Text> */}
      <Text style={styles.test}>Enrollment Number</Text>
      <Text style={styles.test}>{enrollment}</Text>
      <Text style={styles.test}>Name</Text>
      <Text style={styles.test}>{name}</Text>
      </View>
    < Scanner />

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      </View>
     </>
  );
}



const styles = StyleSheet.create({
  test: {
    fontSize: 26,
    color: 'white',
  },
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#3B4252',
     alignItems: 'center',
     justifyContent: 'center',
  },
  rectangle: {
    width: 350,
    height: 200,
    backgroundColor: '#808080',
    // top: -150,
  },
  text: {
    fontSize: 26,
    color: 'white',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    fontSize: 24,
  },
  text1: {
    fontSize: 26,
    color: 'white',
    alignItems: 'flex-start',
    position: 'absolute',
    // top: 150,
    fontSize: 24,
  },
  text2: {
    fontSize: 26,
    color: 'white',
    alignItems: 'center',
    position: 'absolute',
    // position: 'relative',
    // top: 200,
    fontSize: 24,
  },
  text3: {
    fontSize: 26,
    color: 'white',
    alignItems: 'flex-start',
    position: 'absolute',
    // top: 250,
    fontSize: 24,
  },
  text4: {
    fontSize: 26,
    color: 'white',
    alignItems: 'flex-start',
    position: 'absolute',
    // top: 300,
    fontSize: 24,
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

});
