import React from 'react';
import {View, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity, Pressable} from 'react-native';
import Forget_pass from './Forget_pass';


function Login(props) {
    
    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../assets/Logo1.png')} />
            <TextInput style={styles.username}> Username</TextInput>
            <TextInput style={styles.username}> Password</TextInput>
            <TouchableOpacity style={styles.signin} onPress={Forget_pass}>
                <Text > Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.signin}>
                <Button title='Signin' color='#F8B864' onPress={console.log('Sign In')} />
            </TouchableOpacity>
            <Text style={styles.line} >________ OR _______</Text>
            <Pressable  style={styles.Signup}>
                <Button title='SignUp' color='#F8B864' onPress={console.log('Sign Up')} />
            </Pressable>
        
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
        position: 'absolute',
        top: 180    
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
        top: -180,
        color: 'white'
    }
})

export default Login;
