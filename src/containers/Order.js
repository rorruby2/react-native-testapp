import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList, Image, Button, ScrollView, TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import {decreaseCart, increaseCart} from '../store/actions';
import CartItemsList from '../components/CartItemsList';

class Order extends Component {

    static navigationOptions = {
        headerTitle: 'Order Summary'
    }
    
    increaseCart = (data) => {
        this.props.increaseCart(data);
    };

    decreaseCart = (data) => {
        this.props.decreaseCart(data);
    };

    render() {
        var total_cart_amount = this.props.cartItems.length > 0 ? this.props.cartItems.map((item) => item.total_price).reduce((a,b) => a + b, 0):0;
        var delivery_charge = 0;
        var address = this.props.address.find((address)=> address.default == true)
        return (
            <View style={styles.container}>
                <ScrollView style={{backgroundColor: "#e4e6e8"}}>
                    <View style={{margin: 10}}>
                        <View style={{backgroundColor: "white", width: '100%'}}>
                            <Text style={{margin: 5, fontWeight: 'bold'}}>{address.name}</Text>
                            <Text style={{margin: 5}}>{address.address}</Text>
                            <Text style={{margin: 5}}>{address.mobile}</Text>
                            <Button title="Change or Add Address" onPress={() => this.props.navigation.navigate('Address')}></Button>
                        </View>
                    </View>
                    <FlatList
                        data={this.props.cartItems || []}
                        renderItem={(info) => (
                            <View style={{margin: 10}}>
                                <View style={{backgroundColor: "white", width: '100%',flexDirection: 'row'}}>
                                    <View style={{ width: '50%'}}>
                                        <Text style={styles.name}>{info.item.item_name}</Text>
                                        <Text style={styles.name}>Price: {info.item.total_price}</Text>
                                        <View style={{flexDirection: 'row', marginLeft:50, marginTop: 10, marginBottom: 10}}>
                                            <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 8}}>Qty:- </Text>
                                            <Button title="-" onPress={() => this.decreaseCart(info.item)}></Button>
                                            <Text style={{width: '20%', textAlign: 'center', fontWeight: 'bold', marginTop: 8}}>{info.item.count}</Text>
                                            <Button title="+" onPress={() => this.increaseCart(info.item)}></Button>
                                        </View>
                                    </View>
                                    <View style={{ width: '50%'}}>
                                        <Image source={{uri: info.item.image}} style={styles.itemImage}/>
                                    </View>
                                </View>
                            </View>  
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
                </ScrollView>

                <View style={styles.bottomContainer}>
                    <View style={{backgroundColor: "white", width: '100%'}}>
                        <Button title="Checkout" onPress={() => this.props.navigation.navigate('Address')}></Button>
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
        increaseCart: (item) => dispatch(increaseCart(item)),
        decreaseCart: (item) => dispatch(decreaseCart(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);

const styles = StyleSheet.create({
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
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});