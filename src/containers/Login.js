import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
import Form from '../components/Form';

class Login extends React.Component {

  componentDidMount(){            
    this.loadingUserId();
  }

loadingUserId = async () => {
    try 
    {
      var value = await AsyncStorage.getItem('userId');
      if (value !== null){
        this.props.navigation.navigate('MainScreen');
      }
      else{
        this.props.navigation.navigate('Login');
      } 
    } 
    catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <View style={styles.login_screen}>
        <Logo />
        <Form type="Login" navigation={this.props.navigation} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}><Text style={styles.signUpBtn}> SignUp</Text></TouchableOpacity>
        </View>
      </View>
    );
  }  
}

export default Login;

const styles = StyleSheet.create({
    login_screen : {
      flexGrow: 1, 
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