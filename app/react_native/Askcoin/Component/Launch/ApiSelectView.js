/**
 * Created by zhuguoqing on 2017/6/6.
 */
import React,{ Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Grid,
  ThemeStyles,
} from './../../Theme'
import {
  ASKButton
} from './../Common'
class ApiSelectView extends  Component {
  onEnterCommunity(){
    if (this.props.onSelectApi){
      this.props.onSelectApi();
    }
  }
  renderActivityIndicator(){
    if(this.props.showActivityIndicator){
      return (
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      )
    }
  }
  render() {
    return (
      <View style={styles.rooView}>
        <Text style={styles.titleText}>请选择api服务器</Text>
        <View style={styles.activityIndicatorView}>
          {this.renderActivityIndicator()}
        </View>
        <ASKButton
          onPress={this.onEnterCommunity.bind(this)}
          style={styles.button}>
          进入问答社区
        </ASKButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rooView:{
    flex:1,
    // backgroundColor:'#FF00F0',
    alignItems:'center',
  },
  titleText:{
    fontSize:Grid.a*2.0,
  },
  activityIndicatorView:{
    height:80,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button:{
    width:Grid.a*20.0,
    height:Grid.a*4.0,
  }

});
module.exports = ApiSelectView