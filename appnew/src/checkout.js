import React, { Component } from 'react';
import {StyleSheet,ScrollView,Text,TextInput,View,TouchableHighlight, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Checkout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fname : '',
      contactno : '',
      email: '',
      address : '',
    };
  }

  handleFirstName = (text) => {
    this.setState({fname : text})
    AsyncStorage.setItem('fname', JSON.stringify(text));
  }

  handleContact = (text) => {
    this.setState({contactno : text})
    AsyncStorage.setItem('contactno', JSON.stringify(text));
  }

  handleEmail = (text) => {
    this.setState({email : text})
    AsyncStorage.setItem('email', JSON.stringify(text));
  }

  handleAddress = (text) => {
    this.setState({address : text})
    AsyncStorage.setItem('address', JSON.stringify(text));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            placeholder="full name"
            style = {styles.textInputView}
            value={this.state.fname}
            onChangeText= {this.handleFirstName}
          />
          <TextInput underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            placeholder="contact no"
            maxLength={10}
            keyboardType = 'numeric'               
            style = {styles.textInputView}
             value={this.state.contactno}
            onChangeText= {this.handleContact}
          />
          <TextInput underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            placeholder="Address"
            style = {styles.textInputView}
             value={this.state.address}
            onChangeText= { this.handleAddress}
          />
          <TextInput underlineColorAndroid='transparent'
            autoCapitalize = 'none'
            placeholder="Email"             
            style = {styles.textInputView}
            value={this.state.email}
            onChangeText= {this.handleEmail}
          />
        </View>
        <View>
          <TouchableHighlight style={styles.button} onPress={ () => Actions.myorder()}
           underlayColor='midnightblue'>
            <Text style={styles.btnText}>
              Next
            </Text>
          </TouchableHighlight>
        </View> 
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
    margin:5
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },
  textInputView: {
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
  textIn : {
    fontSize: 17,
    textAlign: 'center',
    color: '#0B5351',
    width : 50
  },

})

