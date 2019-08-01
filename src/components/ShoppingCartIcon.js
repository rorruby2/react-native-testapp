import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

const ShoppingCartIcon = (props) => (
    <View style={[{ padding: 5 }]}>
        <View style={styles.iconContainer}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
        </View>
        <Icon onPress={() => props.navigation.navigate('Cart')} name="ios-cart" size={30} />
    </View>
)


const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.items
    }
}
export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: '#4cb5ab', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,
    }
});