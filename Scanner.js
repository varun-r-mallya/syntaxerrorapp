//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner({ onScanned }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    if (!scanned) {
      setScanned(true);

      // Regular expression to check the URL pattern with an 8-character alphanumeric code
      const urlPattern = /^http:\/\/[a-zA-Z0-9.:]+\/[a-zA-Z0-9]{8}$/;

      if (urlPattern.test(data)) {
        onScanned(data);
      } else {
        onScanned("WrongValue");
      }
    }
  };
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
  useEffect(() => {
    // Reset scanned state after onScanned is called
    if (scanned) {
      setScanned(false);
    }
  }, [scanned, onScanned]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3B4252',
  },
});
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering//BY VARUN R MALLYA IIT Roorkee B. Tech Mechanical Engineering
