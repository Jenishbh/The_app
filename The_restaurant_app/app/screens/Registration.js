import React, { Component, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Button, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


export default class SignUp extends Component {

  
  constructor(props){
    super(props)
    this.state = {isChecked: false}
  }
  
  checkBoxChanged(){ 
    this.setState({isChecked : !this.state.isChecked})
  }

  render() {
    const[email, setEmail]= useState('')    // set Email and password varible for cath user input

    const[password, setPassword] = useState('')
    const[phone, setPhone] = useState('')

    const handleSignup = () =>{  //handle sigup
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Signup with: ',user.email);
          })
      .catch((error) => 
      alert(error.message));
      }


    return (
      <SafeAreaView style={styles.background}>
          <Image style={styles.logo} source={require('../assets/Logo1.png')} />

          <TextInput
           style={styles.textInput}
            placeholder="Username"
             placeholderTextColor={'lightgray'}
             />

          <TextInput
           style={styles.textInput}
            placeholder="Email Address"
             placeholderTextColor={'lightgray'}
             onChangeText={text => setEmail(text)}
             />

          <TextInput 
          style={styles.textInput}
           placeholder="Phone Number"
            placeholderTextColor={'lightgray'}
            onChangeText={text => setPhone(text)}
            />

          <TextInput 
          style={styles.textInput}
           placeholder="Password"
            placeholderTextColor={'lightgray'}
            secureTextEntry
            />

          <TextInput 
          style={styles.textInput}
           placeholder="Repeat Password"
            placeholderTextColor={'lightgray'}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />

          <CheckBox
            activeOpacity = {1}
            containerStyle = {styles.checkBox}
            textStyle = {styles.checkBoxTitle}
            checked = {this.state.isChecked}
            onPress = {() => this.checkBoxChanged()}
            title = 'I accept the Terms of Service.'
          />

          <TouchableOpacity  style={styles.signup}>
              <Button title='SignUp' color='#F8B864' onPress={handleSignup} />
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