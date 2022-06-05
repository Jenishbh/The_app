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
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from "./app/screens/Registration";

function App() {
  //return< Login />
  //return "Hello"
  return <SignUp />
  return (
    <div className="App">
      <h3>Build Sign Up & Login UI Template in React</h3>
    </div>
  );
}

export default App;