import React, { Component } from 'react';
import {StyleSheet,ScrollView,Text,TextInput,View,TouchableHighlight, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Url from '../constant/constants';
import styles from '../styles/style';

export default class MyOrder extends Component {

  constructor(props){
    super(props);
    this.state = {
      cart : [],
      grandTotal : 0,
      carts : [],
      Quantity : 1,
      price : 0,
      orderID : '',
      name : "",
      email : '',
      contactn : '',
      address : ''
    }
  }

  componentDidMount(){
    this.getItemsCart();

    var orderIDNumber = (new Date().getTime()).toString(36).toUpperCase()
    this.setState({orderID : orderIDNumber})
    AsyncStorage.getItem('fname').then((value) => {
      this.setState({name : JSON.parse(value)})
    });
    AsyncStorage.getItem('address').then((value) => {
      this.setState({address : JSON.parse(value)})
    });
    AsyncStorage.getItem('contactno').then((value) => {
      this.setState({contactn : JSON.parse(value)})
    });
  }

  componentWillUnmount(){
    Actions.pop()
  }

  getItemsCart(){
    fetch(Url.cartItem)
    .then( (response) => {
      return response.json()
    })   
    .then((json) => {
      var total = 0;
      json.map((car, index) => {
        total = total + parseInt(car.Price);
      })
      this.setState({cart: json, grandTotal : total})
    })
  }

  handleSubmit = () =>{
    this.state.cart.pop()
    Actions.menu()
  }

  cartItemRender() {
    let _this =this;
    return _this.state.cart.map((c,i) => {
      return(
        <View key={c.CartId}>
            <View style={{justifyContent : 'flex-start'}}>
              <View style={{flexDirection : 'row', borderBottomWidth : 1, borderColor : "#0B5351", margin : 10}}>
                <Text style={styles.text}>{c.ItemName}</Text>
                <Text style={styles.text}>{ c.Price}</Text>
                <Text style={styles.text}>{ c.Quantity}</Text>
              </View>
            </View> 
        </View>
      );
    })
  }

  render() {
    return (
      <View style={styles.orderContainer}>
        <View style={{flexDirection : 'row', borderBottomWidth : 1, borderColor : "#0B5351", margin : 10}}>
          <View style={styles.userDetailsView}>
            <Text style={styles.text}>OrderNumber - {this.state.orderID}</Text>
          </View>
        </View>
         <View style={styles.userDetailsView}>
            <Text style={styles.text}>Name - {this.state.name} {", "}
            Delivery address - {this.state.address} {","} Contact - {this.state.contactn}   
            </Text>
          </View>  

        <View style={{justifyContent : 'flex-start'}}>
          <View style={{flexDirection : 'row', borderBottomWidth : 1, borderColor : "#0B5351", margin : 10}}>
            <Text style={styles.text}>Item</Text>
            <Text style={styles.text}>Price</Text>
            <View style={{flexDirection : 'row'}}>
              <Text style={styles.text}>Quantity</Text>
            </View>
          </View>
          <View>{this.cartItemRender()}</View>
          <View>
            <View style={styles.view2}></View>
            <Text style={styles.text}>Grand Total :{this.state.grandTotal}</Text>
          </View>
        </View>

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}
           underlayColor='midnightblue'>
            <Text style={styles.btnText}>
              Done
            </Text>
          </TouchableHighlight>
      </View> 
    );
  }
}
