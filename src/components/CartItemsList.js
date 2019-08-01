import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';

const CartItemsList = (props) => {
    return (
        <View style={{margin: 10}}>
            <View style={{backgroundColor: "white", width: '100%',flexDirection: 'row'}}>
                <View style={{ width: '50%'}}>
                    <Text style={styles.name}>{props.item.item_name}</Text>
                    <Text style={styles.name}>Price: {props.item.total_price}</Text>
                    <View style={{flexDirection: 'row', marginLeft:50, marginTop: 10}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 8}}>Qty:- </Text>
                        <Button title="-" onPress={props.onQuantityRemove}></Button>
                        <Text style={{width: '20%', textAlign: 'center', fontWeight: 'bold', marginTop: 8}}>{props.item.count}</Text>
                        <Button title="+" onPress={props.onQuantityAdd}></Button>
                    </View>
                </View>
                <View style={{ width: '50%'}}>
                    <Image source={{uri: props.item.image}} style={styles.itemImage}/>
                </View>
            </View>
            <View style={{backgroundColor: "white", width: '100%', flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text} onPress={props.onItemRemoved}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>     
    );
}

export default CartItemsList;

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemImage: {
        height: 80,
        width: '85%',
        marginLeft: 20,
        marginTop: 10
    },
    button: {
        width: '48%',
        backgroundColor: '#0094ff',
        margin: 4,
        height: 30
    },
    button_text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        margin: 5
    },
    leftText: {
        flex: 1,
        fontWeight: 'bold',
        margin: 5
    },
    rightText: {
        flex: 1,
        margin: 5,
        fontWeight: 'bold',
        textAlign: 'right'
    },
});