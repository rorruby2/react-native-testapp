import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ViewPagerItem = (props) => {
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate(props.name)}>
               <Text style={styles.textStyle}>{props.name}</Text>
               <Image style={styles.imageStyle} source={props.image_url}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default ViewPagerItem;

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 16,
        color: '#4209f1f2',
        textAlign: 'center'
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageStyle: {
        padding: 10,
        width: 380,
        marginLeft: 15,
        height: 180
    }
});