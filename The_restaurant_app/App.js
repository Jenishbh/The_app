import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/route/homeStack";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Login from "./app/screens/Login";
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import SignUp from "./app/screens/Registration";
//import Manager_home from "./app/screens/Manager_home";

//function App() {
  //return< Login />
  //return "Hello"
  //return <Login />
  //return (
  //  <div className="App">
  //    <h3>Build Sign Up & Login UI Template in React</h3>
  //  </div>
  //);
//}

export default function App() 
{
  return(
    <NavigationContainer>
    <AuthNavigator />
   </NavigationContainer>
 )
};