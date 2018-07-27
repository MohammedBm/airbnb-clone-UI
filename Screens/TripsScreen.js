import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.container}>
        <Text> TripsScreen </Text>
      </View>
    );
  }
}

export default TripsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });