import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './main';
import Menu from './menu';
import Cart from './cart';
import Checkout from './checkout';
import MyOrder from './orderConfirmation';

export default class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={Main} hideNavBar initial/>
          <Scene key="menu" component={Menu} hideNavBar />
          <Scene key="cart" component={Cart} hideNavBar/>
          <Scene key="checkout" component={Checkout} hideNavBar/>
          <Scene key="myorder" component={MyOrder} hideNavBar/>
        </Scene>
      </Router>
    );
  }
}
