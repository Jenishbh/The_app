import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image, ImageBackground, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function Login(props) {
    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../assets/Logo1.png')} />
            <TextInput style={styles.username}> Username</TextInput>
            <TextInput style={styles.username}> Password</TextInput>
            

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
        top: -330,
    }
})
export default Login;