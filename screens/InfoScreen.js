import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InfoScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Information Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});