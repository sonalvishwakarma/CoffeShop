import React, { Component } from 'react';
import {StyleSheet,ScrollView,Text,TextInput,View,TouchableHighlight, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style';

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

  componentWillUnmount(){
    Actions.pop()
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

  handleSubmit = () => {
    if(this.state.fname !== "" || this.state.contactno !== "" || this.state.email !== "" || this.state.address !== "" )
    {
      Actions.myorder()
    }
    else {
      alert('please fill the all fields')
    }
  }

  render() {
    return (
      <View style={styles.checkoutcontainer}>
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
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit}
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

