// import React from 'react';
// import {View, Text, Button, StyleSheet, FlatList, Dimensions} from 'react-native';
// import Item from './Item';


// class ItemsList extends React.Component {
//   state={
//     listData: [],
//     selectedItem: null
//   }

//   componentDidMount(){
//     var productsArray = [];
//     fetch('https://reactnative-240707.firebaseio.com/Product.json')
//     .then(res => res.json())
//     .then(response=>{
//       const arr=[];
//       for(let key in response){
//         arr.push({
//           id:key,
//           ...response[key]
//         })
//       }
//       this.setState({
//         listData: arr
//       });
//     })
//     .catch(err=>console.log(err))
//   }

//   itemSelectedHandler = (key) => {
//     this.setState(prevState => {
//       return {
//         selectedItem: prevState.listData.find(data => {
//           return data.key == key;
//         })
//       };
//     })
//     console.log(selectedItem);
//   };

//   modalClosedHandler = (key) => {
//     this.setState({
//       selectedItem: null
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <ItemDetail selectedItem={this.state.selectedItem} onModalClosed={this.modalClosedHandler}/>
//         <FlatList style={{margin:5}}
//           data={this.state.listData !== undefined ?this.state.listData : []}
//           numColumns={2}
//           keyExtractor={(item, index) => item.id }
//           renderItem={(info) => (
//             <Item
//               style={styles.listItem}
//               imageUrl={info.item.image}
//               itemName={info.item.item_name}
//               itemPrice={info.item.price}
//               onItemPressed={() => this.itemSelectedHandler(info.item.id)}
//             />
//           )}
//         />
//       </View>
//     );
//   }  
// }

// export default ItemsList;

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginBottom: 40,
//     backgroundColor: '#aa74ad'
//   },
//   listItem: { 
//     flex: 1, 
//     margin: 5, 
//     backgroundColor: '#ddd', 
//     height: 130
//   },
//   row: {
//     flex: 1,
//     justifyContent: "space-around"
//   }

// });