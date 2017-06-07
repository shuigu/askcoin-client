/**
 * Created by zhuguoqing on 2017/6/5.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator,
  Text,
  Image,
} from 'react-native';
import {
  Grid,
  ThemeStyles,
  ThemeImages,
} from './../../Theme'

import {ApiSelectView} from './../../Component/Launch'

// 小于3都是失败
let connectErrorCount = 1;

class Launch extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isShowApiList:false,
      connectAnimating:false,
    };
  }
  componentDidMount() {
    this.connectApi(false);
  }
  /**
   * 连接api服务器
   * */
  connectApi(animation){
    if (animation){
      this.setState({
        connectAnimating:true,
      });
    }
    let time = 2000;
    setTimeout(()=>{

      if (animation){
        this.setState({
          connectAnimating:false,
        });
      }

      let succeed = connectErrorCount++>=3?true:false;
      if(succeed){
        this.onConnectApiSucceed();
      }else{
        this.onConnectApiFault();
      }
    },time);
  }
  onConnectApiSucceed(){
    let mainRoute = this.props.screens.Main.routeKey;
    this.props.navigator.push({screen:mainRoute});
  }
  onConnectApiFault(){
    this.setState({
      isShowApiList:true,
    });
  }
  onSelectApi(){
    this.connectApi(true);
  }
  renderBottomView(){
    if(this.state.isShowApiList){
      return (
        <View style={styles.apiSelectView}>
          <ApiSelectView showActivityIndicator={this.state.connectAnimating} onSelectApi={this.onSelectApi.bind(this)}/>
        </View>
      );

    }else{
      return <Image style={styles.bigImage} source={ThemeImages.commonImages.posterImage}/>
    }
  }
  render() {
    return (
      <View style={ThemeStyles.defaultContainer}>
        <View style={styles.topView}>
          <Image style={styles.logoImage} source={ThemeImages.commonImages.logoImage}/>
          <View style={styles.textView}>
            <Text style={styles.text}>ask anyone, anything,</Text>
            <Text style={styles.text}>from anywhere.</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          {
           this.renderBottomView()
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topView:{
    marginTop:Grid.a*15,
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
  bottomView:{
    flex:1
  },
  apiSelectView:{
    marginTop:Grid.a*5
  },
  bigImage:{
    width:6*Grid.A,
    height:10*Grid.A,
    resizeMode:'contain'
  },
});
module.exports = Launch;