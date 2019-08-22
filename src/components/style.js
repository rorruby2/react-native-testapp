import React from "react";
import { StyleSheet } from "react-native";

class Home extends React.Component {
    const styles = StyleSheet.create({
        container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 40,
        backgroundColor: '#aa74ad'
        },
        listItem: { 
        flex: 1, 
        margin: 5, 
        backgroundColor: '#ddd', 
        height: 130
        },
        row: {
        flex: 1,
        justifyContent: "space-around"
        }
    
    });
}

