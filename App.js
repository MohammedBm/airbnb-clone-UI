import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import ExploreScreen from './Screens/ExploreScreen'
import InboxScreen from './Screens/InboxScreen'
import SavedScreen from './Screens/SavedScreen'
import TripsScreen from './Screens/TripsScreen'
import ProfileScreen from './Screens/ProfileScreen'

export default createBottomTabNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon:({tinitColor}) => (
        <Icon name="ios-search-outline" color={tinitColor} size={24} />
      )
    }
  },
  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon:({tinitColor}) => (
        <Icon name="ios-heart-outline" color={tinitColor} size={24} />
      )
    }
  },
  Trips: {
    screen: TripsScreen,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: InboxScreen,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon:({tinitColor}) => (
        <Icon name="ios-chatboxes-outline" color={tinitColor} size={24} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon:({tinitColor}) => (
        <Icon name="ios-person-outline" color={tinitColor} size={24} />
      )
    }
  },
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
  }
});
