import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

class LogOut extends Component {

   removeUserId = async () => {
      try {
         let value = await AsyncStorage.removeItem('userId');
      }
      catch (error) { // log the error
      }
   };

   componentDidMount(){
      this.removeUserId();
      this.props.navigation.navigate('Login');
    }

   render() {
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
         </View>
      )
   }
}
export default LogOut

const styles = StyleSheet.create ({
   container : {
      flex: 1,
      padding: 5,
      marginBottom: 40,
      backgroundColor: '#aa74ad'
    },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})