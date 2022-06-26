import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack";``
import Login from "../screens/Login";
import Forget_pass from "../screens/Forget_pass";
import SignUp from "../screens/Registration";
import customer_home from '../screens/Customer/customer_home';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer} from '@react-navigation/native';
import {tabBarOption, Image, View} from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons' ; 
import Con from 'react-native-vector-icons/Octicons';
import Reservation from '../screens/Customer/reservation';
import Menu from '../screens/Customer/menu'
import Manager_home from '../screens/Manager/Manager_home';
import DetailsScreen from '../screens/Customer/detailsScreen';




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
            <Tab.Screen name="Menu"
            component={Reservation}
            options={{tabBarIcon:()=>(
            <Icon name='restaurant'
            color='orange'
            size={28}
            
            />
            ),
            headerShown: false}}
              />
            <Tab.Screen 
            name="Reservation" 
            component={Menu} 
            options={{tabBarIcon:(color)=>(
            <Icon name="date-range"
            color={color}
            size={28} 
             />
            ),
            headerShown: false}}
              />
            <Tab.Screen 
            name="Search" 
            component={Login} 
            options={{tabBarIcon:(color)=>(
            <View style={{height: 50, width:60,
             justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: 'orange',
              borderWidth: 2,
              borderRadius: 30,
              top: -25,
              elevation: 5,
              }}>
                 <Icon name="search" color={color} size={28} />
            </View>
            ),
             }}
              />
            <Tab.Screen 
            name="Profile" 
            component={Login} 
            options={{tabBarIcon:(color)=>(
            <Icon name="face"
            color={color}
            size={28} />
            ),
             }}
              />
            <Tab.Screen 
            name="About" 
            component={Login} 
            options={{tabBarIcon:(color)=>(
            <Con name="question"
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
        
        <Stack.Screen name='Manager_home' component={Manager_home} options={{headerShown: false}} />
        <Stack.Screen name='Customer_home' component={customer_home} options={{headerShown: false}} />
        <Stack.Screen name='Customer_main' component={BottomNavigator} options={{headerShown: false}} />
        <Stack.Screen name='detailsScreen' component={DetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}} />
        <Stack.Screen name='Login'  component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Forgot_pass' component={Forget_pass} options={{headerShown: false}}/>
        <Stack.Screen name='Signup'  component={SignUp} />
        
        
        
        
        
        

      
</Stack.Navigator>

)

export default AuthNavigator;