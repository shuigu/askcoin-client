/**
 * Created by zhuguoqing on 2017/6/7.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Grid,
  ThemeStyles,
} from './../../Theme'
import {
  LogoView
} from './../../Component/Common'
import  {
  RegisterView,
  RegisterSucceedView
} from './../../Component/Regitster'
// 页面显示类型
const contentType= {
  REGISTER:1,           // 注册
  REGISTER_SUCCEED:2,   // 注册成功
  PACK_REVERT:3         // 从钱包回复
}

class Register extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      contentType:contentType.REGISTER
    };
  }
  // 注册结果回调
  onRegisterCallback(registerSucceed){
    if(registerSucceed){
      this.setState({
        contentType:contentType.REGISTER_SUCCEED
      });
    }
  }
  // 从钱包恢复
  onPackRecover(){
    this.setState({
      contentType:contentType.PACK_REVERT
    });
  }
  // 备份钱包
  onPackBackup(){
    let backupSucceed = true;
    if(backupSucceed){
      let route = this.props.screens.Main.routeKey;
      this.props.navigator.push({screen:route});
    }
  }
  renderContent(){
    if(this.state.contentType == contentType.REGISTER){
      return this.renderRegisterContent();
    }else if(this.state.contentType == contentType.REGISTER_SUCCEED){
      return this.renderRegisterSucceedContent();
    }else{
      return this.renderPackRevert();
    }
  }
  renderRegisterContent(){
    return (<RegisterView
      onRegisterCallback={this.onRegisterCallback.bind(this)}
      onPackRecover={this.onPackRecover.bind(this)}
    />);
  }
  renderRegisterSucceedContent(){
    return (<RegisterSucceedView onPress={this.onPackBackup.bind(this)}/>);
  }
  renderPackRevert(){

  }
  render() {
    return (
      <View style={[styles.rootView,ThemeStyles.defaultContainer]}>
        <View style={styles.logoView}>
          <LogoView/>
        </View>
        <View style={styles.contentView}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootView:{
    flex:1,
  },
  logoView:{
    marginTop:Grid.a*15,
  },
  contentView:{
    flex:1
  }
});


module.exports = Register;