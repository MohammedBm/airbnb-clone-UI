import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.startHeaderHeight = 80
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.inputParent}>
              <Icon name='ios-search' size={20} />
              <TextInput
                underlineColorAndroid='transparent'
                placeholder="Try Jeddah"
                placeholderTextColor="grey"
                style={styles.textInput} 
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },
  inputParent: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == 'android' ? 30 : null
  },
  textInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white'
  }
});
