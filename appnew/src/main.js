import React, { Component } from 'react';
import {Text,View,TouchableHighlight, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {

 render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={ () => Actions.menu()}>
            <Text style={styles.text}>cOffeSHop</Text>
          </TouchableHighlight>
        </View>  
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
  text : {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  }
})

