import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Item = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onItemPressed}>
                <Image
                    source={{uri: props.imageUrl}}
                    style={styles.itemImage}
                />
            </TouchableOpacity>
            <View>
                <Text style = {styles.name}>{props.itemName}</Text>
                <Text >Price: {props.itemPrice}</Text>
            </View>           
        </View>        
    );
}

export default Item;

const styles = StyleSheet.create({
    container : {
        width: '50%',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemImage: {
        margin: 5,
        height: 75,
        width: 50
    },
});