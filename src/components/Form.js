import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import firebase from '../firebase'

class Form extends React.Component {

    state = { email: 'puja@abc.com', password: '111111', errorMessage: null }

    
    // componentDidMount(){
    //     loadingUserId = async () => {
    //         try {
    //           var value = await AsyncStorage.getItem('userId');
    //           console.log('inside=>', value)
    //           if (value !== null){
    //             this.props.navigation.navigate('MainScreen');
    //           }
    //           else{
    //             this.props.navigation.navigate('Login');
    //           } 
    //         } catch (error) {
    //         }
    //       };
            
    //     loadingUserId();
    // }

    setUserId = async (id) => {
        try {
           await AsyncStorage.setItem('userId', id);
        } 
        catch (error) { // log the error
        }
    };
    
    handleSignUp = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(res=>{
            if(res.user.email == this.state.email){
                this.setUserId(res.user.uid);
                this.props.navigation.navigate('MainScreen');
            }
        })
        .catch(err=>{
            alert(err.message)
        })
        // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        // .then(res=>{
        //     console.log(res.user)
        //     this.setUserId(res.user.uid);
        //     if(res.status===200){
        //         this.props.navigation.navigate('MainScreen');
        //     }
        // })
        // .catch(err=>{
        //     console.log(err)
        //     alert(err.message)
        // })
    }
    render() 
    {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    placeholder="Email" 
                    placeholderTextColor="#ffffff" 
                    selectionColor='#fff' 
                    keyboardType='email-address'
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    />
                <TextInput style={styles.inputBox} 
                    placeholder="Password" 
                    placeholderTextColor="#ffffff" 
                    secureTextEntry={true} 
                    selectionColor='#fff'
                    ref={(input) => this.password = input }
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text} onPress={this.handleSignUp}>{this.props.type}</Text>
                </TouchableOpacity>
                
            </View>
        );
    }  
}

export default Form;

const styles = StyleSheet.create({
    container : {
        flexGrow: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 266, 0.3)',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#0b6cc1',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 12,
    },
    button_text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});