import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import Forget_pass from "./app/screens/Forget_pass";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/route/homeStack";
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import SignUp from "./app/screens/Registration";

//function App() {
  
//  Login;

  //return "Hello"
  //return <Login />
  //return (
  //  <div className="App">
  //    <h3>Build Sign Up & Login UI Template in React</h3>
  //  </div>
  //);
//}

export default function App() {
  return(
    <NavigationContainer>
    <AuthNavigator />
    </NavigationContainer>
  )
};