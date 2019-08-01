import React from 'react';
import {View, Text, Button, StyleSheet, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import ItemDetails from '../components/ItemDetails';
import Item from '../components/Item';
import { connect } from "react-redux";
import {fetchApparelFromApi} from '../store/actions';

class Apparel extends React.Component {

// calling the fetch Apperl function
  componentDidMount(){
    this.props.fetchApparel();
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: "#e4e6e8"}}>
        <Text style={styles.TextStyle}>Apparel Items</Text>
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
      listData: state.apparel.listData,
      loading: state.apparel.loading,
      error:state.apparel.errors,
  };
}

mapDispatchToProps = (dispatch) => {
  return{
      fetchApparel: () => dispatch(fetchApparelFromApi()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Apparel);

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