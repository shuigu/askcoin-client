/**
 * Created by zhuguoqing on 2017/6/7.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {
  Grid,
  ThemeImages,
} from './../../Theme'
class LogoView extends Component {
  render() {
    return (
      <View style={styles.rootView}>
        <Image style={styles.logoImage} source={ThemeImages.commonImages.logoImage}/>
        <View style={styles.textView}>
          <Text style={styles.text}>ask anyone, anything,</Text>
          <Text style={styles.text}>from anywhere.</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootView:{
    alignItems:'center',
  },
  logoImage:{
    width:12*Grid.a,
    height:12*Grid.a,
    resizeMode:'contain'
  },
  textView:{
    marginTop:Grid.a*2,
    alignItems:'center',
  },
  text:{
    fontSize:Grid.a*2.5,
  },
});
module.exports = LogoView;