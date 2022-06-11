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
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import SignUp from "./app/screens/Registration";
import Forget_pass from "./app/screens/forget_pass";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.screens>
                
            </Stack.screens>

        </Stack.Navigator>


    </NavigationContainer>
    return< Login />
    //return < Forget_pass />
    //return "Hello"
    //return <SignUp />
    //return (
    //  <div className="App">
    //    <h3>Build Sign Up & Login UI Template in React</h3>
    //  </div>
    //);
}

export default App;