/**
 * Created by zhuguoqing on 2017/6/9.
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
} from './../../Theme'
import {
  ASKButton
} from './../Common'

class RegisterSucceedView extends Component {
  onPress() {
    if(this.props.onPress){
      this.props.onPress();
    }
  }
  render() {
    return (
      <View style={styles.rootView}>
        <Text style={styles.titleText}>恭喜注册成功</Text>
        <View style={styles.tipsView}>
          <Text style={styles.tipsText}>请务必牢记你的密码,并备份好</Text>
          <Text style={styles.tipsText}>你的钱包文件,否则你的资金可</Text>
          <Text style={styles.tipsText}>能永远丢失</Text>
        </View>
        <ASKButton style={styles.buttonView} onPress={this.onPress.bind(this)}>
          备份钱包
        </ASKButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootView:{
    flex:1,
    marginTop:Grid.a * 6,
    alignItems:'center',
  },
  titleText:{
    fontSize:Grid.a*2.4,
  },
  tipsView:{
    marginTop:Grid.a * 3,
    alignItems:'center',
  },
  tipsText:{
    fontSize:Grid.a*2.0,
    margin:2,
    color:'#999999'
  },
  buttonView:{
    marginTop:Grid.a * 6,
    width:Grid.a * 15,
    height:Grid.a * 4,
  }
});
module.exports = RegisterSucceedView;