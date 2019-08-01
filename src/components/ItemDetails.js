import React, { Component } from 'react';
import { StyleSheet, Modal, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import {addToCart, selectItem, unselectItem} from '../store/actions';
import firebase from "firebase";

class ItemDetails extends React.Component {
  
    // constructor(){
    //     super();
    //     // this.readUserData();
    // }

    // addCart = (data) => {
    //     this.props.addCart(data);
    //     console.log('data ' , data)
    //     firebase.database().ref('Carts').update({
    //         items: [data]
    //     }).then((data)=>{
    //         //success callback
    //         console.log('data ' , data)
    //     }).catch((error)=>{
    //         //error callback
    //         console.log('error ' , error)
    //     })
    // }

    // readUserData() {
    //     firebase.database().ref('Carts/').on('value', (snapshot) => {
    //         this.props.addCart(snapshot.val().items);
    //     });
    // }
    
    addCart = (data) => {
        this.props.addCart(data);
    }

    render() {
        var selected_item = this.props.navigation.state.params.item
        var modalContent = null;
        modalContent = (
            <View>
                <Image source={{uri: selected_item.image}} style={styles.itemImage}/>
                <Text style={styles.itemName}>{selected_item.item_name}</Text>
                <Text style={styles.itemName}>Rs. {selected_item.price}</Text>
                <View style={{padding: 10}}>
                    <Button title="Close" onPress={() => this.props.navigation.pop()} />
                </View>
                {
                    this.props.items.filter(({id}) => id == selected_item.id).length > 0 ?
                    <View style={{padding: 10}}>
                        <Button title="Go to Cart" onPress={() => this.props.navigation.navigate('Cart')} />
                    </View>
                    :
                    <View style={{padding: 10}}>
                        <Button title="Add Cart" onPress={() => this.addCart(selected_item)} />
                    </View>
                }
            </View>
        );
        return (
            <View>
                <View style={styles.modalContainer}>{modalContent}</View>
            </View>
        )
    }    
};

mapStateToProps = (state) => {
    return {
        items: state.cartItems.items,
    };
  }
  
  mapDispatchToProps = (dispatch) => {
    return{
        addCart: (item) => dispatch(addToCart(item)),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

const styles = StyleSheet.create({
    modalContainer: {
        margin: 10,
        paddingLeft: 7
    },
    itemImage: {
        width: '100%',
        height: 220
    },
    itemName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22
    },
});