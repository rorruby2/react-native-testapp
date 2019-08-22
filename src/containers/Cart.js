import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList, Image, Button, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {removeFromCart, decreaseCart, increaseCart} from '../store/actions';
import CartItemsList from '../components/CartItemsList';
import {fetchAddressFromApi} from '../store/actions';

class CartScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Cart Items'
    }

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
        var delivery_charge = 0;
        var default_address = this.props.address ? this.props.address.find((address)=> address.default == true) : null;
        console.log('address=>',default_address)

        return (
            <View style={styles.container}>
                <ScrollView style={{backgroundColor: "#e4e6e8"}}>
                    {
                        this.props.cartItems.length > 0 ?                    
                        <View>
                            <FlatList
                                data={this.props.cartItems || []}
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
                        </View>
                        : <Text style={{fontSize: 15, textAlign: 'center'}}>No items in your cart</Text>
                    }
                </ScrollView>

                <View style={styles.bottomContainer}>
                    <View style={{backgroundColor: "white", width: '100%'}}>
                        <Button title="Place Order" onPress={() => this.props.navigation.navigate('Order', {address: default_address,})}></Button>
                    </View>
                </View>
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.items,
        address: state.addressList.address,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (item) => dispatch(removeFromCart(item)),
        increaseCart: (item) => dispatch(increaseCart(item)),
        decreaseCart: (item) => dispatch(decreaseCart(item)),
        // fetchAddress: () => dispatch(fetchAddressFromApi()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
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
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});