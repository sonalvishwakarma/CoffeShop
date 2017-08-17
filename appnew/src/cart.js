import React, { Component } from 'react';
import {StyleSheet,TextInput,Text,View,Image,TouchableHighlight, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Delete from '../img/del1.png';
import Url from '../constant/constants';

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
    fetch(Url.Items)
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
  
  /*HandleQuantity(q, item){
    this.setState({Quantity: q})
     var total = 0;
      this.state.cart.map((car) => {
        total = total + parseInt(car.Price) * this.state.Quantity;
      })
    this.setState({grandTotal : total, Quantity: q})
  }*/
  
  removeCartItem (ca){
    console.log(this.state.cart, 'getting')
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
              <View style={{flexDirection : 'row', borderBottomWidth : 1, borderColor : "#0B5351", margin : 10}}>
                <Text style={styles.text}>{c.ItemName}</Text>
                <Text style={styles.text}>{ c.Price}</Text>
                {/*<View style={{flexDirection : 'row'}}>
                  <TextInput style={styles.textIn} 
                    underlineColorAndroid='transparent'
                    autoCapitalize = 'none'
                    value={_this.state.Quantity}
                    onChangeText={(Quantity) => _this.HandleQuantity(Quantity)}
                  />
                </View>*/}
                <Text style={styles.text}>{ c.Quantity}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
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
      <View style={styles.container}>
        <View style={{justifyContent : 'flex-start'}}>
          <View style={{flexDirection : 'row', borderBottomWidth : 1, borderColor : "#0B5351", margin : 10}}>
            <Text style={styles.text}>Item</Text>
            <Text style={styles.text}>Price</Text>
            <View style={{flexDirection : 'row'}}>
              <Text style={styles.text}>Quantity</Text>
            </View>
          </View>
          <View>
          {this.cartItemRender()}
          <View>
            <View style={styles.view2}></View>
            <Text style={styles.text}>Grand Total :{this.state.grandTotal}</Text>
          </View>
          </View>
        </View> 
      
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'#cd853f',
  },
  view2: {
    backgroundColor: '#0B5351',
    height: 4,
  },
  text : {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },
  textIn : {
    fontSize: 17,
    textAlign: 'center',
    color: '#0B5351',
    width : 50
  },
   button : {
    backgroundColor: '#D3D3D3',
    margin:5
  },
  delBtn : {
    backgroundColor: 'transparent',
    color : '#0B5351',
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },
})

