import React, { Component } from 'react';
import {StyleSheet, TextInput,Text,View,Image,TouchableHighlight,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Url from '../constant/constants';

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

  getItems = () => {
    fetch(Url.Items)
    .then((response) => {
      return response.json()
    })   
    .then((json) => {
      this.setState({ items : json})
      console.log(this.state.items, 'items')
    })
  }

  /*handleCart () => {
    
  }*/

  handleAddToCart = (selectedItem) => {
    fetch(Url.cartItem)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
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
      var img = v.Image
     return(
        <View style={styles.item} key={i}>
          <View style={{flexDirection : "row"}}>
            <View style={{justifyContent : 'flex-start',  width : 160}}>
              <Image source={{uri: v.Image}} style={{height : 150, width :  150}}/>
            </View>
            <View style={{justifyContent : 'flex-end',  width : 180}}>
              <TouchableHighlight>
                <Text style={styles.text}>{v.Item}</Text>
              </TouchableHighlight>
               <TouchableHighlight>
                <Text style={styles.text}>{v.Price}</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress = {() => _this.handleAddToCart(v) } underlayColor='midnightblue'>
                <Text style={styles.btnText}>
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
      <View style={styles.container}>
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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'#cd853f',
  },
  serchInput: {
    flexDirection : 'row',
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    width: 330,
    borderColor: 'gray',
    borderWidth: 5,
    borderRadius : 10,
    color: 'black',
    backgroundColor:'white',
    fontSize : 18,
    paddingLeft:10,
    alignItems: 'stretch',
  },
  text : {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#0B5351',
  },
  button : {
    backgroundColor: '#D3D3D3',
    margin:10,
    width : 130,
  },
  btnText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },
  item : {
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height : 150,
    width : 340,
    margin : 5,
    borderWidth : 1,
    borderRadius : 10,
    borderColor: '#D3D3D3',
    backgroundColor : 'white'
  },

})

