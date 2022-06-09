import React, { Component} from 'react';
import {View, SafeAreaView, StyleSheet, Button, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {isChecked: false}
  }

  checkBoxChanged(){ 
    this.setState({isChecked : !this.state.isChecked})
  }

  render() {
    
    return (
      <SafeAreaView style={styles.background}>
          <Image style={styles.logo} source={require('../assets/Logo1.png')} />
          <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor={'lightgray'}/>
          <TextInput style={styles.textInput} placeholder="Email Address" placeholderTextColor={'lightgray'}/>
          <TextInput style={styles.textInput} placeholder="Repeat Email Address" placeholderTextColor={'lightgray'}/>
          <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor={'lightgray'}/>
          <TextInput style={styles.textInput} placeholder="Repeat Password" placeholderTextColor={'lightgray'}/>

          <CheckBox
            activeOpacity={1}
            containerStyle = {styles.checkBox}
            textStyle = {styles.checkBoxTitle}
            checked = {this.state.isChecked}
            onPress = {() => this.checkBoxChanged()}
            title = 'I accept the Terms of Service.'
          />

          <TouchableOpacity  style={styles.signup}>
              <Button title='SignUp' color='#F8B864' />
          </TouchableOpacity>
      
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  background:{
      backgroundColor: '#191E25',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  logo:{
      height: 107,
      width: 300,        
      position: 'absolute',
      top: 150
  },
  textInput:{
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      padding: 8,
      margin: 10,
      width: 300,
      top: -180,
      color: 'white'
  },
  checkBox:{
    marginTop: 10,
    top: -190,
    borderWidth: 0 ,
    backgroundColor: 'transparent',
  },

  checkBoxTitle:{
    color: 'white'
  },

  signup:{
      borderWidth: 1,
      borderColor: 'orange',
      borderRadius: 10,
      padding: 8,
      
      width: 300,
      top: -180,
      color: 'white'
  }
})