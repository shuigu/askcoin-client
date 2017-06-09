/**
 * Created by zhuguoqing on 2017/6/7.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {
  Grid,
} from './../../Theme'
import {
  ASKButton
} from './../Common'


class LogoView extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      accountText:'',
      passwordText:'',
      confirmText:'',
    };
  }
  onRegister(){
    console.log('账号:',this.state.accountText);
    console.log('密码:',this.state.passwordText);
    let registerSucceed = true;
    if(this.props.onRegisterCallback){
      this.props.onRegisterCallback(registerSucceed);
    }
  }
  onPackRecover(){
    if(this.props.onPackRecover){
      this.props.onPackRecover();
    }
  }
  renderInputView(){
    return (
      <View>
        {
          [
            this.renderInputItem('accountText','账号:','请输入账号'),
            this.renderInputItem('passwordText','密码:','请输入密码'),
            this.renderInputItem('confirmText','密码确认:','请确认密码')
          ]
        }
      </View>
    );
    return
  }
  renderInputItem(stateKey,label,placeholder,onChangeText){
    return (
      <View key={stateKey} style={styles.inputContentView}>
        <View style={styles.labelView}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => {
                let newState = {}
                newState[stateKey] = text;
                this.setState(newState)
              }
            }
            value={this.state[stateKey]}
            placeholder={placeholder}
          />
        </View>
      </View>
    );
  }
  renderRegisterButton(){
    return (
      <View style={styles.registerButtonContainerView}>
        <ASKButton style={styles.buttonView} onPress={this.onRegister.bind(this)}>
          注册
        </ASKButton>
        <ASKButton style={styles.buttonView} onPress={this.onPackRecover.bind(this)}>
          从钱包恢复
        </ASKButton>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.rootView}>
        <Text>新用户注册</Text>
        {this.renderInputView()}
        {this.renderRegisterButton()}
      </View>
    );
  }
}

const Content_Width =  Grid.a * 40;
const Label_Width   =  Grid.a * 9;
const Input_Margin_Label   =  Grid.a * 2;
const Input_Width   = Content_Width -  Label_Width - Input_Margin_Label * 2

const styles = StyleSheet.create({
  rootView:{
    marginTop:Grid.a * 5,
    alignItems:'center',
  },
  inputContentView:{
    marginTop:Grid.a * 2,
    width:Content_Width,
    flexDirection:'row',
    height:Grid.a * 5,
    margin:5,
  },
  labelView:{
    flexDirection:'row',
    justifyContent:'flex-end',
    width:Label_Width,
    alignItems:'center',
  },
  label:{
    fontSize:Grid.a*2,
  },
  inputView:{
    flex:1,
    marginLeft:Input_Margin_Label,
    alignItems:'center',
    borderColor: '#999999',
    borderWidth: 0.5,
    borderRadius:5,
  },
  input:{
    flex:1,
    width:Input_Width,
    padding: 0,
    fontSize:Grid.a*2,
    margin:4,
  },
  // 注册按钮
  registerButtonContainerView:{
    marginTop:Grid.a * 5,
    flexDirection:'row',
    width:Content_Width * 0.85,
    justifyContent:'space-between'
  },
  buttonView:{
    width:Grid.a * 15,
    height:Grid.a * 4,
  }
});
module.exports = LogoView;