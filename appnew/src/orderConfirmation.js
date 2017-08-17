import React, { Component } from 'react';
import {StyleSheet,ScrollView,Text,TextInput,View,TouchableHighlight, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

var itemsCart = 'https://api.myjson.com/bins/zzg2x';

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
    this.getItemsCart();
  }

  componentDidMount(){
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

  getItemsCart(){
    fetch(itemsCart)
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
      <View style={styles.container}>
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

        <TouchableHighlight style={styles.button} onPress={ () => Actions.menu()}
           underlayColor='midnightblue'>
            <Text style={styles.btnText}>
              Done
            </Text>
          </TouchableHighlight>
      </View> 
    );
  }
}

const styles = StyleSheet.create ({
 container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#cd853f',
    justifyContent:'flex-start',
  },
  button : {
    backgroundColor: '#D3D3D3',
    margin:5,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },
  loginInput: {
    flexDirection : 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    color: 'gray',
    backgroundColor:'white',
    fontSize : 18,
    paddingLeft:10,
    alignItems: 'stretch',
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
  userDetailsView : {
    backgroundColor: 'white',
  },
  textIn : {
    fontSize: 17,
    textAlign: 'center',
    color: '#0B5351',
    width : 50,
  },

})
