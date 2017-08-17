import React, { Component } from 'react';
import {StyleSheet,TextInput,Text,View,Image,TouchableHighlight, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Delete from '../img/del1.png';
import Url from '../constant/constants';
import styles from '../styles/style';

export default class Cart extends Component {

  constructor(props){
    super(props);
    this.state = {
      cart : [],
      grandTotal : 0,
      carts : [],
      Quantity : 1,
      price : 0
    }
  }

  componentDidMount(){
    this.getItemsCart();
  }

  getItemsCart = () => {
    fetch(Url.cartItem)
    .then((response) => {
      return response.json()
    })   
    .then((json) => {
      var total = 0;
      json.map((car) => {
        total = total + parseInt(car.Price);
      })
      this.setState({cart: json, grandTotal : total})
    })
  }
  
  removeCartItem (ca){
    this.state.cart.forEach((car, index) => {
      var data = []
      if(car.CartId === ca.CartId){
      data = this.state.cart.splice(index, 1) ;
      fetch(Url.cartItem, {  
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(function(){
        alert("Successfully deleted the item from your cart");
         Actions.cart()
        })
      }
    });
  }

  cartItemRender() {
    let _this =this;
    return _this.state.cart.map((c,i) => {
      return(
        <View key={c.CartId}>
            <View style={{justifyContent : 'flex-start'}}>
              <View style={styles.cartOrderView}>
                <Text style={styles.carttext}>{c.ItemName}</Text>
                <Text style={styles.carttext}>{ c.Price}</Text>
                <Text style={styles.carttext}>{ c.Quantity}</Text>
                <View style={styles.cartRemoveBtn}>
                  <TouchableHighlight underlayColor='midnightblue' onPress={() => this.removeCartItem(c)}>
                    <Image source={Delete} style={{height : 25, width : 25}}/>     
                  </TouchableHighlight>
                </View> 
              </View>
            </View> 
        </View>
      );
    })
  }

  render() {
    return (
      <View style={styles.cartcontainer}>
        <View style={{justifyContent : 'flex-start'}}>
          <View style={styles.cartOrderView}>
            <Text style={styles.carttext}>Item</Text>
            <Text style={styles.carttext}>Price</Text>
            <View style={{flexDirection : 'row'}}>
              <Text style={styles.carttext}>Quantity</Text>
            </View>
          </View>
          <View>
          {this.cartItemRender()}
          <View>
            <View style={styles.view2}></View>
            <Text style={styles.carttext}>Grand Total :{this.state.grandTotal}</Text>
          </View>
          </View>
        </View> 
      
        <View style={styles.cartBtn}>
          <TouchableHighlight style={styles.button} onPress = {() => Actions.menu() } underlayColor='midnightblue'>
            <Text style={styles.btnText}>
              continue items
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='midnightblue' onPress={ () => Actions.checkout()}>
              <Text style={styles.btnText}>
               Checkout
              </Text>
            </TouchableHighlight>
        </View>  
      </View> 
    );
  }
}


