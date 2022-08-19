import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

import Dishes from '../components/Dish'
import {Card} from 'react-native-paper'

import {Button} from 'react-native-elements';

import { getFoods } from '../database/foodAPI';


const WIDTH = Dimensions.get("window").width;
const numColumn = 2;

export default function Manager_Menu({navigation}){
  
  //const [food, setFood] = useState([{foods}]);
  const foodList = getFoods();
  const [foods, setFood] = useState([
    {
      id: 1,
      name: 'Butter Chicken',
      ingredients: 'Indian Curry',
      price: '8.30',
      //catagories: [1],
      image: require('../assets/butter-chicken-curry.jpg'),
      details: 'Chicken is marinated in yogurt, spices, garlic and ginger, then later cooked in a tandoor, but it can also be pan fried, grilled or oven roasted. After that it is tossed with the simmered, richly seasoned tomato sauce.',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      ingredients: 'Pepperoni Pizza',
      price: '7.10',
      //catagories: [3],
      image: require('../assets/pepperoni-pizza.jpg'),
      details: "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
    },
    {
      id: 3,
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      //catagories: [2],
      image: require('../assets/chickenBurger.png'),
      details: "A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast or thigh served between slices of bread, on a bun, or on a roll. Variations on the chicken sandwich include the chicken burger, chicken on a bun, chickwich, hot chicken, or chicken salad sandwich.",
    },
    {
      id: 4,
      name: 'Naan',
      ingredients: 'Indian Bread',
      price: '9.55',
      //catagories: [1],
      image: require('../assets/naan.png'),
    },
    {
      id: 5,
      name: 'Malai Kofta',
      ingredients: 'Indian Veg.Curry',
      price: '9.55',
      //catagories: [1],
      image: require('../assets/malai-kofta.jpg'),
      details: "Naan is a leavened, oven-baked flatbread native to India. It resembles pita bread but unlike pita, it has yogurt, milk, sometimes eggs or butter which makes it softer than the pita bread. Our bakers shape it into a ball and slap it on the walls of our tandoor (clay oven).",
    },
    {
      id: 6,
      name: 'Samosa',
      ingredients: 'Starter',
      price: '9.55',
      //catagories: [1],
      image: require('../assets/entrees.jpg'),
      details: "A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.",
    },
  ]);

  const pressAddHanderler=()=>{
      console.log("Add more dish pressed");
      navigation.push('Menu_input');
  }
  
  return (
    <SafeAreaView >
      {/*Display each dish in data file*/}
      <FlatList 
        numColumns={numColumn}
        keyExtractor={(item) => item.id}
        data={foods}
        renderItem={({item})=>(
          <TouchableOpacity
            onPress={()=> navigation.navigate('Menu_edit',{
            id: item.id,
            name: item.name,
            ingredients: item.ingredients,
            price: item.price,
            image: item.image,
            details: item.details,
            }
          )}>
            <Card>
              <Dishes item={item}/>
            </Card>
          </TouchableOpacity>
        )
        }       
      />

      {/*Button for add more dish*/}
      {/* <TouchableOpacity style={styles.button}> */}
      <Button
          onPress={pressAddHanderler} 
          titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight:'bold'
          }}
          buttonStyle={{
            backgroundColor: "#ffaf51",
            height: 50,
            width: 250,  
            marginHorizontal:10,
            alignSelf:'center'
          }}

          title="ADD MORE DISH"
        />
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  );
}

Manager_Menu.navigationOptions={
  title:'Menu',
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor: '#ffaf51',
  },
  headerTintColor: '#4b4f57',
  headerTintStyle:{
    fontWeight:'bold',
  }
}
