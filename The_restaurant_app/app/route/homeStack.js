import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack";
//import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Forget_pass from "../screens/Forget_pass";
import SignUp from "../screens/Registration";
import customer_home from '../screens/customer_home';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer} from '@react-navigation/native';
import {tabBarOption} from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-elements/dist/icons/Icon';
import customer_main from '../screens/customer_main';




const Stack= createStackNavigator();
const Tab = createBottomTabNavigator();
const forogtNavigator = () => (
    
    <Stack.Navigator>
        
        <Stack.Screen name = "Forgot" component={Forget_pass} />
          
    </Stack.Navigator>
    
    
)

const HomeNavigator = ()=>(
    <Stack.Navigator>
    
    <Stack.Screen name = "Login" component={Login} />
    
      
</Stack.Navigator>
)
const BottomNavigator =()=>{
    return(
        <Tab.Navigator tabBarOption={{
            style:{
                height:55,
                borderTopWidth:0,
                elevation:0,
              },
              showLabel:false,
              activeTintColor:'orange',
                
            
        }}>
            <Tab.Screen name="Home" component={customer_main} options={{tabBarIcon:(color)=>(
            <Icon name="home-filed"
            color={color}
            size={28} />
            ),
             }}
              />
            <Tab.Screen 
            name="menu" 
            component={Login} 
            options={{tabBarIcon:(color)=>(
            <Icon name="home-filed"
            color={color}
            size={28} />
            ),
             }}
              />
            <Tab.Screen 
            name="Profile" 
            component={Login} 
            options={{tabBarIcon:(color)=>(
            <Icon name="home-filed"
            color={color}
            size={28} />
            ),
             }}
              />
        </Tab.Navigator>
    )
}
const AuthNavigator = ()=>(
    
    <Stack.Navigator>
        
        
        <Stack.Screen name='Customer_home' component={customer_home} options={{headerShown: false}} />
        <Stack.Screen name='Customer_main' component={BottomNavigator} options={{headerShown: false}} />
        <Stack.Screen name='Login'  component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Forgot_pass' component={Forget_pass} options={{headerShown: false}}/>
        <Stack.Screen name='Signup'  component={SignUp} />
        
        
        
        
        

      
</Stack.Navigator>

)

export default AuthNavigator;