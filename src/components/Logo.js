import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


class Logo extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <Image
                style={{width: 100, height: 60}}
                source={require('../images/logo.png')}
            />
            <Text style = {styles.logo_text}>Welcome to My App</Text>
        </View>
    );
  }  
}

export default Logo;

const styles = StyleSheet.create({
    container : {
        flexGrow: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    logo_text: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
});