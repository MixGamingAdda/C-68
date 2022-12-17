import React, {Component} from 'react';
import {Text , View , StyleSheet } from 'react-native';

export default class SearchScreen extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>SearchScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'black'
  },

  text : {
    color : '#ffff',
    fontSize : 30
  }
});