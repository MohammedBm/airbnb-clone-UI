import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, Platform, StatusBar, ScrollView, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'

const { height, width } = Dimensions.get('window')

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {

    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
        this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [this.startHeaderHeight, this.endHeaderHeight],
        extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.startHeaderHeight],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.startHeaderHeight],
        outputRange: [-30, 10],
        extrapolate: 'clamp'
    })
    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.startHeaderHeight],
        outputRange: [50, 30],
        extrapolate: 'clamp'
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>

          <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <View style={styles.inputParent}>
              <Icon name='ios-search' size={20} style={{ marginRight: 10}} />
              <TextInput
                underlineColorAndroid='transparent'
                placeholder='Try  "Jeddah"'
                placeholderTextColor="grey"
                style={styles.textInput} 
              />
            </View>

            <Animated.View
              style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity}}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />

            </Animated.View>

          </Animated.View>

          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                { nativeEvent: { contentOffset: { y: this.scrollY } } }
              ]
            )}
          >

            <View style={styles.scrollContainer}>
              <Text style={styles.welcomeMessage}>
                What can you we help you find, Nihanned?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category imageUri={require('../assets/restaurant.jpg')}
                    name="Home" 
                  />
                  <Category imageUri={require('../assets/experiences.jpg')}
                    name="Experiences" 
                  />
                  <Category imageUri={require('../assets/restaurant.jpg')}
                    name="Resturant" 
                  />
                </ScrollView>
              </View>

              <View style={styles.plusContainer}>
                <Text style={styles.plusText}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={styles.plusDescription}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={styles.plusImageConatienr}>
                  <Image
                    style={styles.plusImage}  
                   source={require('../assets/home.jpg')}
                  />
                </View>
              </View>
            </View>

            <View style={{marginTop: 40}}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Homes around the world
              </Text>
              <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Home width={width} 
                  name='The Cozy Place' 
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home width={width} 
                  name='The Cozy Place' 
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={2.5}
                />
                <Home width={width} 
                  name='The Fancy Place' 
                  type="PRIVATE ROOM - 3 BEDS"
                  price={82}
                  rating={4.5}
                />
                <Home width={width} 
                  name='The Cozy Place' 
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={3}
                />
              </View>
            </View>

          </ScrollView>

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
  header:{ 
    height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' 
  },
  inputParent: {
    flexDirection: 'row', padding: 10,
    backgroundColor: 'white', marginHorizontal: 20,
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
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  horizontalScroll: {
    height: 130,
    marginTop: 20
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  plusContainer: {
    marginTop: 40, paddingHorizontal: 20
  },
  plusText:{
    fontSize: 24,
    fontWeight: '700'
  },
  plusDescription: {
    fontWeight: '100',
    marginTop: 10
  },
  plusImageConatienr: {
    width: width - 40,
    height: 200,
    marginTop: 20,
  },
  plusImage: {
    flex: 1,
    height: null, 
    width: null,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd'
  }
});
