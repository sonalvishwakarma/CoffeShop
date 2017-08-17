import React, { Component } from 'react';
import {Text,View,TouchableHighlight, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/style';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.maincontainer}>
        <View>
          <TouchableHighlight onPress={ () => Actions.menu()}>
            <Text style={styles.text}>cOffeSHop</Text>
          </TouchableHighlight>
        </View>  
      </View> 
    );
  }
}


