import React, { Component } from "react";
import { View, Text } from "react-native";
import {createDrawerNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import Grocery from './src/containers/Grocery';
import MainScreen from './src/containers/MainScreen';
import FAQ from './src/containers/Faq';
import Profile from './src/containers/Profile';
import LogOut from './src/containers/LogOut';
import Electronics from './src/containers/ElectronicItems';
import Apparel from './src/containers/Apparel';
import ShoppingCartIcon from './src/components/ShoppingCartIcon';
import Cart from './src/containers/Cart';
import ItemDetail from './src/components/ItemDetails';
import Address from './src/containers/Address';
import Order from './src/containers/Order';
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

const MyDrawerNavigator = createDrawerNavigator(
  {
    MainScreen: {screen: MainScreen},
    Grocery: {screen: Grocery},
    Electronics: {screen: Electronics},
    Apparel: {screen: Apparel},
    // Profile: {screen: Profile},
    FAQ: {screen: FAQ},
    Cart: {screen: Cart},
    Address: {screen: Address},
    Order: {screen: Order},
    LogOut: {screen: LogOut}
  },
);

const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    MainScreen: {
      screen: MyDrawerNavigator,
    },
    Grocery: {
      screen: Grocery,
    },
    Electronics: {
      screen: Electronics,
    },
    Apparel: {
      screen: Apparel,
    },
    FAQ: {
      screen: FAQ,
    },
    // Profile: {
    //   screen: Profile
    // },
    Cart: {
      screen: Cart,
    },
    ItemDetail: {
      screen: ItemDetail,
    },
    Address: {
      screen: Address,
    },
    Order: {
      screen: Order,
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      }
    },
    LogOut: {
      screen: LogOut,
    },
  },
  {
    initialRouteName : 'Login',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="bars"
            onPress={() => navigation.openDrawer()}
            size={20}
            color="#000"
            style={{ marginLeft: 10 }}
          />
          ),
        headerRight:(<ShoppingCartIcon />),
        headerTitle: 'ShoppingApp'
      };
    }
  }

);


const AppContainer = createAppContainer(AppStackNavigator);

export default App;
