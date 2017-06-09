/**
 * Created by zhuguoqing on 2017/6/9.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  Grid,
  ThemeStyles,
} from './../../Theme'
class ASKButton extends Component {
  onPress(){
    if(this.props.onPress){
      this.props.onPress();
    }
  }
  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight
          onPress={this.onPress.bind(this)}
          style={styles.buttonView}
          underlayColor='#FFFFFF'
        >
          <Text style={styles.text}>
            {this.props.children}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView:{
    flex:1,
    borderColor: '#999999',
    borderWidth: 0.5,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#1d8afb'
  }
});
module.exports = ASKButton;