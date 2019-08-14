import React from 'react';
import {View, Text, Button, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableOpacity, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import {fetchAddressFromApi, addAddress} from '../store/actions';

class Address extends React.Component {

// calling the fetch Apperl function
  componentDidMount(){
    this.props.fetchAddress();
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: "#e4e6e8"}}>
        <Text style={styles.TextStyle}>Address</Text>
      {
        this.props.loading ?
        <ActivityIndicator color = '#fff' size = "large" style = {styles.activityIndicator}/>
        :

        <View style={{margin:10}}>
            <View style={{margin: 10}}>
              <TouchableOpacity style={{backgroundColor: "white", width: '100%'}}>
                <View style={{flexDirection: 'row', margin: 5}}>
                  <Icon name="ios-add" size={30} style={{marginRight: 5}}/>
                  <Text style={{margin: 5, fontWeight: 'bold'}}>Add Address</Text>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
                data={this.props.address || []}
                renderItem={(info, index) => {
                  const checked = info.item.default ? true : false;
                  return (
                      <View style={{margin: 10}}>
                        <View style={{backgroundColor: "white", width: '100%'}}>
                          <RadioButton.Group value={info.item.name}>
                            <View>
                              <RadioButton value={info.item.name} status={checked === true ? 'checked' : 'unchecked'}/>
                                <Text style={{margin: 5, fontWeight: 'bold'}}>{info.item.name}</Text>
                                <Text style={{margin: 5}}>{info.item.address}</Text>
                                <Text style={{margin: 5}}>{info.item.mobile}</Text>
                            </View>
                          </RadioButton.Group>                         
                        </View>
                    </View>
                    )
                }}
            />
        </View>
      }
      </ScrollView>
    );
  }  
}

mapStateToProps = (state) => {
  return {
      address: state.addressList.address,
      loading: state.addressList.loading,
      error:state.addressList.errors,
  };
}

mapDispatchToProps = (dispatch) => {
  return{
    fetchAddress: () => dispatch(fetchAddressFromApi()),
    addAddress: (item) => dispatch(addAddress(item)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Address);

const styles = StyleSheet.create({
  listItem: { 
    flex: 1, 
    margin: 5, 
    backgroundColor: '#ddd', 
    height: 130
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  TextStyle:{
    fontSize : 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: 'black'
  }
});