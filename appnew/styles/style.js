import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create ({

  /*main*/ 
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'#cd853f',
  },
  text : {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#0B5351',
  },

  /*menu*/
 
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
  mainText : {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#0B5351',
  },
  menubutton : {
    backgroundColor: '#D3D3D3',
    margin:10,
    width : 130,
  },
  menubtnText: {
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

  /*cart*/

  cartcontainer: {
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
  carttext : {
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

  /*checkout*/

  checkoutcontainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#cd853f',
    justifyContent:'flex-start',
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
  textIn : {
    fontSize: 17,
    textAlign: 'center',
    color: '#0B5351',
    width : 50
  },

  /*orderConfirmation*/

  orderContainer: {
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

}); 

