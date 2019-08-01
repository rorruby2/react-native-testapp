import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList, Image, Button, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {removeFromCart, decreaseCart, increaseCart} from '../store/actions';
import CartItemsList from '../components/CartItemsList';
import firebase from "firebase";

class CartScreen extends Component {

    // constructor(){
    //  super();
    //  this.state = {
    //      cartItems: []
    //  };
    // }

    // componentDidMount(){
    //   this.readUserData(); 
    // }

    // readUserData() {
    //     firebase.database().ref('Carts/').on('value', (snapshot) => {
    //         console.log(snapshot.val());
    //         this.setState({
    //             cartItems: snapshot.val().items
    //         }, ()=>{
    //             console.log(this.state.cartItems);
    //         })
    //     });
    //     firebase.database().ref('Carts/').on('value', (snapshot) => {
    //         this.props.addCart(snapshot.val().items);
    //     });
    // }

    // increaseCart = (data) => {
    //     var v = this.props.cartItems.filter(item => {
    //         if(item.id == data.id)
    //             item.count++;
    //         return true;
    //       });
    //     this.props.increaseCart(data);
    //     firebase.database().ref('Carts/').update({
    //         items: v
    //     });
    // };

    removeCart = (data) => {
        data.item.count = 1
        this.props.removeCart(data);
    };
    
    increaseCart = (data) => {
        this.props.increaseCart(data);
    };

    decreaseCart = (data) => {
        this.props.decreaseCart(data);
    };

    render() {
        var total_cart_amount = this.props.cartItems.length > 0 ? this.props.cartItems.map((item) => item.total_price).reduce((a,b) => a + b, 0):0;
        var delivery_charge = 0
        return (
            <ScrollView style={{backgroundColor: "#e4e6e8"}}>
                <Text style={styles.TextStyle}>Cart Items</Text>
                {
                    this.props.cartItems.length > 0 ?
                    <View>
                        <FlatList
                            data={this.props.cartItems || []}
                            // keyExtractor={(item, index) => index }
                            renderItem={(info) => (
                                <CartItemsList
                                    item={info.item} 
                                    onItemRemoved={() => this.removeCart(info)}
                                    onQuantityAdd={() => this.increaseCart(info.item)}
                                    onQuantityRemove={() => this.decreaseCart(info.item)}
                                />
                            )}
                        />
                        <View style={{margin: 10}}>
                            <View style={{backgroundColor: "white", width: '100%'}}>
                                <Text style={{margin: 5, borderBottomWidth: 1, borderBottomColor: 'gray', fontWeight: 'bold'}}>PRICE DETAILS</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.leftText}>Price</Text>
                                    <Text style={styles.rightText}>Rs.{total_cart_amount}</Text>
                                </View>
                                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'gray',}}>
                                    <Text style={styles.leftText}>Delivery</Text>
                                    <Text style={styles.rightText}>(Free) Rs.{delivery_charge}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.leftText}>Amount Payble</Text>
                                    <Text style={styles.rightText}>Rs.{total_cart_amount}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{margin: 10}}>
                            <View style={{backgroundColor: "white", width: '100%'}}>
                                <Button title="Place Order" ></Button>
                            </View>
                        </View>
                    </View>
                    
                    : <Text style={{fontSize: 15, textAlign: 'center'}}>No items in your cart</Text>
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (item) => dispatch(removeFromCart(item)),
        increaseCart: (item) => dispatch(increaseCart(item)),
        decreaseCart: (item) => dispatch(decreaseCart(item)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

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
    TextStyle:{
        fontSize : 20,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: 'black'
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