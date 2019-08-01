import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';


class SignUp extends React.Component {

  render() {
    return (
      <View style={styles.login_screen}>
        <Logo />
        <Form type="SignUp"/>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signUpBtn}> Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }  
}

export default SignUp;

const styles = StyleSheet.create({
  login_screen : {
    flexGrow: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#455a64',
  },
  signUpContainer:{
    flexGrow: 1, 
    alignItems: 'flex-end', 
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signUpText:{
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  signUpBtn:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  }
});