import React, { Component } from 'react';
import {StyleSheet, TextInput,Text,View,Image,TouchableHighlight,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Url from '../constant/constants';
import styles from '../styles/style';

export default class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    this.getItems()
  }

  componentWillUnmount(){
    Actions.pop()
  }

  getItems = () => {
    fetch(Url.Items)
    .then((response) => {
      return response.json()
    })   
    .then((json) => {
      this.setState({ items : json})
    })
  }

  handleAddToCart = (selectedItem) => {
    fetch(Url.cartItem)
    .then( (response) => {
      console.log(response,'res')
      return response.json()
    })
    .then( (json) => {
      console.log(json, 'json')
      var prodID = json.find((pID) => {
        return pID.ID === selectedItem.ID;
      })
      if(prodID && prodID.ID === selectedItem.ID){
        alert("Item already added")
      }
      else{
        var product = {
          CartId : json.length+1,
          ID : selectedItem.ID,
          ItemName : selectedItem.Item,
          Price : selectedItem.Price,
          Quantity : selectedItem.Quantity,
        }
        json.push(product);
        fetch(Url.cartItem, {  
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(json)
        }).then((res) => {
            return res.json()
          .then((json) => {
            console.log(json)
            Actions.cart()
            alert("Successfully added item")
          })
        })
      }
    })
  }

  getItemsRender =() =>{
    let _this =this;
    return _this.state.items.map(function(v,i) {
      return(
        <View style={styles.item} key={i}>
          <View style={{flexDirection : "row"}}>
            <View style={{justifyContent : 'flex-start',  width : 160}}>
              <Image source={{uri: v.Image}} style={{height : 150, width :  150}}/>
            </View>
            <View style={{justifyContent : 'flex-end',  width : 180}}>
              <TouchableHighlight>
                <Text style={styles.menuText}>{v.Item}</Text>
              </TouchableHighlight>
               <TouchableHighlight>
                <Text style={styles.menuText}>{v.Price}</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.menubutton} onPress = {() => _this.handleAddToCart(v) } underlayColor='midnightblue'>
                <Text style={styles.menubtnText}>
                  add to cart
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      );
    })
  }

  render() {            
    return (
      <View style={styles.maincontainer}>
        <View>
          <TextInput underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            placeholder="Search"
            style = {styles.serchInput}
          />
        </View>
        <ScrollView>
          <View style={{flex : 1, flexDirection : 'column'}}>
            {this.getItemsRender()}
          </View>  
        </ScrollView>
      </View> 
    );
  }
}


