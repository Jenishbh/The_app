
import React from 'react';
import {View, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity, Pressable} from 'react-native';
import Forget_pass from './Forget_pass';
import SignUp from './Registration';
import { useNavigation } from '@react-navigation/native';






function Login({navigation}) {
    
    

    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../assets/Logo1.png')} />
            <TextInput placeholder='Email' style={styles.username}/>
            <TextInput placeholder='Password' style={styles.username} secureTextEntry/>
            <Pressable style={styles.signin} onPress={Forget_pass}>
                <Text > Forgot Password?</Text>
            </Pressable>
            <Pressable  style={styles.signin}>
                
                <Button title='Login' color='#F8B864' onPress={console.log('Forget_pass')} />
            </Pressable>
            <Text style={styles.line} >________ OR _______</Text>
            <TouchableOpacity  style={styles.Signup}>
                
                <Button title='Create Account' color='#F8B864' onPress={() => navigation.navigate(Forget_pass)} />
            </TouchableOpacity>
        
            


        
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
        
        top: -190    
    },
    username:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        width: 300,
        top: -190,
        color: 'white'
        
    },
    signin:{  
        top: -170,
        
        
    },
    line:{
        top: -150,
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
