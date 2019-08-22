import React from 'react';
import {View, Text, Button, StyleSheet, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import ItemDetails from '../components/ItemDetails';
import Item from '../components/Item';
import { connect } from "react-redux";
import {fetchElectronicsFromApi} from '../store/actions';

class ElectronicItems extends React.Component {

  static navigationOptions = {
    headerTitle: 'Electronic Items'
  }

  componentDidMount(){
    this.props.fetchElectronics();
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: "#e4e6e8"}}>
      {
        this.props.loading ?
        <ActivityIndicator color = '#fff' size = "large" style = {styles.activityIndicator}/>
        :
        <View style={{marginRight:10}}>
          <FlatList
            data={this.props.listData || []}
            numColumns={2}
            keyExtractor={(item, index) => item.id }
            renderItem={(info) => (
              <Item
                style={styles.listItem}
                imageUrl={info.item.image}
                itemName={info.item.item_name}
                itemPrice={info.item.price}
                onItemPressed={() => this.props.navigation.navigate('ItemDetail', {item: info.item,})}
              />
            )}
          />
        </View>
      }
      </ScrollView>
    );
  }  
}

mapStateToProps = (state) => {
  return {
      listData: state.electronics.listData,
      loading: state.electronics.loading,
      error:state.electronics.errors
  };
}

mapDispatchToProps = (dispatch) => {
  return{
      fetchElectronics: () => dispatch(fetchElectronicsFromApi()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ElectronicItems);

const styles = StyleSheet.create({
  listItem: { 
    flex: 1, 
    margin: 5, 
    backgroundColor: '#ddd', 
    height: 140
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