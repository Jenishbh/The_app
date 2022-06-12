<<<<<<< HEAD
import React from 'react';
import {View, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity, Pressable} from 'react-native';
import Forget_pass from './Forget_pass';
=======
import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity} from 'react-native';

import { auth } from '../database/firebase';
>>>>>>> c397e03cace738083889de24532c78616d409917

import {getAuth, OnAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

function Login(props) {
    const[email, setEmail]= useState('')    // set Email and password varible for cath user input
   const[password, setPassword] = useState('')
   const navigation = useNavigation()      // set navigation to change the screen after user login


   useEffect(() => { 
    const auth=getAuth();
                        //function for user to move on to home screen after  login 
    const unsubscribe = auth.onAuthStateChanged( user => {
        if (user){
            navigation.navigate('Home')
        }
    })

    return unsubscribe

   }, [])

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


   const handleLogin = () =>{    
    const auth = getAuth();  //Handel Login by firebase

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Log in with: ',user.email);
        })
        .catch(error => alert(error.message))
   }


    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../assets/Logo1.png')} />
<<<<<<< HEAD
            <TextInput style={styles.username}> Username</TextInput>
            <TextInput style={styles.username}> Password</TextInput>
            <TouchableOpacity style={styles.signin} onPress={Forget_pass}>
                <Text > Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.signin}>
                <Button title='Signin' color='#F8B864' onPress={console.log('Sign In')} />
=======
            <TextInput
             placeholder='Email'
             value={email}
             onChangeText={text => setEmail(text)}
             style={styles.username}
             />

            <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.username}
             secureTextEntry
             />
            <TouchableOpacity  style={styles.line}>  
            <Button title='Forgot Password?'  onPress={() => navigation.navigate(Forget_pass)} />
>>>>>>> c397e03cace738083889de24532c78616d409917
            </TouchableOpacity>

            <Pressable  style={styles.signin}>

                <Button title='Login' color='#F8B864' onPress={handleLogin} />
            </Pressable>


            <Text style={styles.line} >________ OR _______</Text>
<<<<<<< HEAD
            <Pressable  style={styles.Signup}>
                <Button title='SignUp' color='#F8B864' onPress={console.log('Sign Up')} />
            </Pressable>
        
=======


            <TouchableOpacity  style={styles.Signup}>
                
                <Button title='SignUp' color='#F8B864' onPress={handleSignup} />
            </TouchableOpacity>
        
            


            <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.username}
             secureTextEntry
             />

            <TouchableOpacity  style={styles.line}>  
            <Button title='Forgot Password?'  onPress={() => navigation.navigate(Forget_pass)} />
            </TouchableOpacity>
            <Pressable  style={styles.signin}>
                
                <Button title='Login' color='#F8B864' onPress={handleLogin} />
            </Pressable>
            <Text style={styles.line} >________ OR _______</Text>
            <View style={styles.Signup}>
                
                <Button title='Create Account' color='#F8B864' onPress={handleSignup} />
            </View>
        
>>>>>>> c397e03cace738083889de24532c78616d409917
        </SafeAreaView>
    );
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
        
        top: -210    
    },
    username:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        width: 300,
        top: -250,
        color: 'white'
        
    },
    signin:{  
        top: -240,
        
        
    },
    line:{
        top: -230,
        color: 'white',
    },
    Signup:{
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        padding: 8,
        
        width: 300,
        top: -110,
        color: 'white'
    }
})

export default Login;



