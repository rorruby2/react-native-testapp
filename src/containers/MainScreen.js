import React from "react";
import { View, ViewPagerAndroid } from "react-native";
import ViewPager from "../components/viewPager";

class MainScreen extends React.Component {

  slider1 =  [{image: require('./../images/grocery1.jpeg'), name: 'Grocery'},
              {image: require('./../images/grocery2.jpeg'), name: 'Grocery'},
              {image: require('./../images/grocery3.jpeg'), name: 'Grocery'}]

  slider2 =  [{image: require('./../images/electronic1.jpg'), name: 'Electronics'},
              {image: require('./../images/electronic2.jpeg'), name: 'Electronics'},
              {image: require('./../images/electronic3.jpeg'), name: 'Electronics'}]

  slider3 =  [{image: require('./../images/cloth1.jpeg'), name: 'Apparel'},
              {image: require('./../images/cloth2.jpeg'), name: 'Apparel'},
              {image: require('./../images/cloth3.jpeg'), name: 'Apparel'}]
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e4e6e8'}}>
        <ViewPager data={this.slider1} navigation={this.props.navigation}></ViewPager>
        <ViewPager data={this.slider2} navigation={this.props.navigation}></ViewPager>
        <ViewPager data={this.slider3} navigation={this.props.navigation}></ViewPager>
      </View>
    );
  }
}

export default MainScreen;
