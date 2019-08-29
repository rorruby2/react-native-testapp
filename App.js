import React, { Component } from "react";
import { View, Text } from "react-native";
import {createDrawerNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator, StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import Grocery from './src/containers/Grocery';
import MainScreen from './src/containers/MainScreen';
import FAQ from './src/containers/Faq';
import LogOut from './src/containers/LogOut';
import Electronics from './src/containers/ElectronicItems';
import Apparel from './src/containers/Apparel';
import ShoppingCartIcon from './src/components/ShoppingCartIcon';
import Cart from './src/containers/Cart';
import ItemDetail from './src/components/ItemDetails';
import Address from './src/containers/Address';
import Order from './src/containers/Order';
import BarCode from './src/containers/BarCode'; 
import Picture from './src/containers/Picture';
import { createStore,applyMiddleware } from 'redux';
import RootReducer from "./src/store/rootreducer";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

// store
const store = createStore(RootReducer,applyMiddleware(thunk));

// app
class App extends Component {

  render() {
    return  <Provider store={store}>
              <AppContainer />
            </Provider>;
  }
}

// const withHeader = (screen: Function, routeName: string): StackNavigator =>
//   createStackNavigator(
//     { [routeName]: { screen } },
//     {
//       headerMode: 'screen',
//       defaultNavigationOptions: ({ navigation }) => {  
//         return {  
//             headerLeft: ( 
//                 <Icon
//                   name="bars"
//                   onPress={() => navigation.openDrawer()}
//                   size={20}
//                   color="#000"
//                   style={{ marginLeft: 10 }}
//                 />
//             ),
//             headerTitle: routeName
//         };  
//       }  
//     },
//   );


  const mainDrawer = createStackNavigator(
    {
      MainScreen: {
        screen: MainScreen, 
        navigationOptions: ({navigation}) => {
          return {  
            headerTitle: 'MainScreen',
            headerLeft: ( 
                <Icon
                  name="bars"
                  onPress={() => navigation.openDrawer()}
                  size={20}
                  color="#000"
                  style={{ marginLeft: 10 }}
                />
            )
          }
        } 
      },
      Grocery: {screen: Grocery},
      Electronics: {screen: Electronics},
      Apparel: {screen: Apparel},
      FAQ: {screen: FAQ},
      Cart: {screen: Cart},
      Address: {screen: Address},
      Order: {screen: Order},
      BarCode: {screen: BarCode},
      Picture: {screen: Picture},
      ItemDetail: {screen: ItemDetail}
    },
    {
      initialRouteName: 'MainScreen',
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerRight:(<ShoppingCartIcon />),
        };
      }
    });

const MyDrawerNavigator = createDrawerNavigator(
  {
    MainScreen: {screen: mainDrawer},
    Grocery: {screen: Grocery},
    Electronics: {screen: Electronics},
    Apparel: {screen: Apparel},
    FAQ: {screen: FAQ},
    Cart: {screen: Cart},
    Address: {screen: Address},
    // Address: {screen: withHeader(Address, "Address")},
    Order: {screen: Order},
    BarCode: {screen: BarCode},
    Picture: {screen: Picture},
    LogOut: {screen: LogOut}
  },
); 

const AppSwitchNavigator = createSwitchNavigator(
  {
    MainScreen: {
      screen: MyDrawerNavigator,
    },
    Login: {
      screen: Login,
      navigationOptions: {header: null,}
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {header: null,}
    },
    LogOut: {
      screen: LogOut,
    },
  },
  {
    initialRouteName : 'Login',
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
