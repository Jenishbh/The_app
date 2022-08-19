import Header from '../../components/Header'
import React, {useState} from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Button} from 'react-native-elements'
// import firebase from 'firebase';
// import { addFood, uploadFood } from '../database/foodAPI';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Menu_edit({navigation}){
 const {id,name,ingredients,price,image,details,} = navigation.getParam;
  const pressConfirmHanderler=()=>{
    console.log("Confirm");
    //addFood();
    navigation.pop();
  };
  const updateHanderler=()=>{
    console.log("Update");
    // //for updating the food
    //updateFood();
    navigation.pop();
  };
  //btton to delete food item and go back to menu
  const deleteHanderler=()=>{
    console.log("Delete");
    // //for delete the food
    //deleteFood();
    navigation.pop();
  };
  const [foods, setFood] = useState([]);

  const [selectedImage, setSelectedImage] = React.useState([null]);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  
  return(
    <SafeAreaView style={styles.container}>
      {/*<Header/>*/}
      <ScrollView>
        {/*Dish name input*/}
        <Text style={styles.lable}>Dish Name: </Text>
        <TextInput
          style={styles.input}
          // placeholder=" eg: Homemade Burger"
          onChangeText={foods => setFood(foods)}
          defaultValue={navigation.getParam('name')!=null?navigation.getParam('name'):" eg: Homemade Burger"}
          multiline={true}
        />
        {/*Price input*/}
        <Text style={styles.lable}>Price: </Text>
        <TextInput
          style={styles.inputPrice}
          // placeholder=" eg: 9.99"
          onChangeText={foods => setFood(foods)}
          defaultValue={navigation.getParam('price')!=null?navigation.getParam('price'):" eg: 9.99"}
        />
         {/*Ingrediens input*/}
        <Text style={styles.lable}>Ingredients: </Text>
        <TextInput
          style={styles.input}
          //placeholder=" eg: Beef, Onion, Pepper..."
          onChangeText={foods => setFood(foods)}
          defaultValue={navigation.getParam('ingredients')!=null?navigation.getParam('ingredients'):" eg: Beef, Onion, Pepper..."}
          multiline={true}
        />
         {/*details input*/}
        <Text style={styles.lable}>Details: </Text>
        <TextInput
          style={styles.input}
          // placeholder=" eg: This is a home-style beef burger."
          onChangeText={foods => setFood(foods)}
          defaultValue={navigation.getParam('details')!=null?navigation.getParam('details'):" eg: This is a home-style beef burger."}
          multiline={true}
        />
        {/*Image input*/}
        <View style={styles.containerImage}>
          <Text style={styles.lable}>Image: </Text>
          {/*Upload button*/}
          <TouchableOpacity onPress={openImagePickerAsync} style={styles.uploadbutton}>
            <Text style={styles.buttonText}>SELECT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePickerAsync} style={styles.uploadbutton}>
            <Text style={styles.buttonText}>UPLOAD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
                <Image
                source={navigation.getParam('image')==null?
                        { uri: selectedImage.localUri }:navigation.getParam('image')}
                style={styles.image}
                />
            </View>
        
      <TouchableOpacity style={styles.updateDeleteBox}>
          <Button 
            onPress={updateHanderler}
            titleStyle={{
                color: "white",
                fontSize: 16,
                fontWeight:'bold'
                }}
                buttonStyle={{
                    backgroundColor: "#ffaf51",
                    height: 50,
                    width: 120,  
                    marginHorizontal:10,
                }}

            title="Update"
          />
          <Button 
            onPress={deleteHanderler}
            color="orange" 
            titleStyle={{
                color: "white",
                fontSize: 16,
                fontWeight:'bold'
                }}
                buttonStyle={{
                    backgroundColor: "#ffaf51",
                    height: 50,
                    width: 120,  
                    marginHorizontal:10,
                }}
            title="Delete"
          />
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

Menu_edit.navigationOptions={
  title:'Edit',
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor: '#ffaf51',
  },
  headerTintColor: '#4b4f57',
  headerTintStyle:{
    fontWeight:'bold',
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
    
  },
  lable:{
    fontSize: 18,
    fontWeight:'bold',
    paddingLeft: 20, 
    marginTop: 10,
    paddingTop: 10,
  },
  containerImage:{
    flex:1,
    flexDirection:'row',
    // borderWidth:2,
    // borderStyle:'dotted'
  },
  image :{
    width: WIDTH*0.7, 
    height: HEIGHT*0.3,
    margin: 20,
    borderRadius: 10,
  },
  imageContainer:{
    borderWidth:2,
    borderStyle:'dotted',
    marginLeft:40,
    marginRight:40,
    marginTop:10,
  },
  input:{
    backgroundColor:'#ffdca3',
    padding: 8,
    marginTop: 10,
    //borderWidth:2,
    borderRadius:5, 
    borderColor:'black', 
    width: '90%',
    height: 80, 
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf:'center'
  },
  inputPrice:{
    backgroundColor:'#ffdca3',
    padding: 8,
    marginTop: 10,
    //borderWidth:2,
    borderRadius:5, 
    borderColor:'black', 
    width: '90%',
    height: 40, 
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf:'center'
  },
  button:{
    padding: 5,
    fontSize: 16,
    marginHorizontal: 15,
    alignSelf:'center',
    borderRadius:3,
    //borderWidth:2,

  },
  uploadbutton: {
    backgroundColor: '#dbd9d3',
    padding: 2,
    paddingLeft:7,
    borderRadius:2,
    width: 80,
    //alignSelf:'center',
    marginTop:10,
    marginLeft:20
  },
   buttonText: {
    fontSize: 14,
    color: 'black',
    //fontWeight:'bold',
    alignSelf:'center',
  },
  updateDeleteBox:{
    flex:1,
    flexDirection:'row',
    padding: 5,
    fontSize: 16,
    width: 300,
    alignSelf:'center',
    borderColor:'orange',
    borderRadius:3,
    //borderWidth:2,
    marginTop:10

  }
});