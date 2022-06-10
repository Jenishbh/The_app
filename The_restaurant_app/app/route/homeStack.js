import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
//import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Forget_pass from "../screens/Forget_pass";
import SignUp from "../screens/Registration";
import { SafeAreaView } from 'react-navigation';




const Stack= createStackNavigator();
const forogtNavigator = () => (
    
    <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} />
        <Stack.Screen name = "Forgot" component={Forget_pass} />
          
    </Stack.Navigator>
    
    
)

const homeNavigator = ()=>(
    <Stack.Navigator>
    
    <Stack.Screen name = "Forgot" component={Forget_pass} />
    <Stack.Screen name="Login"  component={Login} />
      
</Stack.Navigator>
)

const AuthNavigator = ()=>(
    <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} />
        <Stack.Screen name="Forgot" component={Forget_pass} />
        
    
    
    
      
</Stack.Navigator>
)

export default AuthNavigator;