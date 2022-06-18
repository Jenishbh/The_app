import React from 'react'
import { Text, View, SafeAreaView,StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import categories from '../Menu/Catagories'


function Reservation() {
    const [selectedCategoryIndex, setselectedCategoryIndex] = React.useState(0);
    const ListCategories =()=>{
      return(
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.catagoriesListContainer}
        >
          {categories.map((category,index)=>(
            <TouchableOpacity key={index} activeOpacity={0.8}
             onPress={()=> setselectedCategoryIndex(index)} >
              <View style={{
                backgroundColor:selectedCategoryIndex== index ? 'orange' : '#FEDAC5',
                ...style.categorryBtn}}>
                  <View style={style.categorryBtnImgCon}>
                    <Image source={category.image} style={{height:35, width:35, resizeMode: 'cover'}} />
                  </View>
                  <Text 
                    style={{fontSize:15,
                       fontWeight: 'bold',
                        marginLeft: 10,
                         color: selectedCategoryIndex == index
                          ? 'white' 
                          : 'orange'
                           }}>
                    {category.name}</Text>
                </View>

            </TouchableOpacity>
          ))}
        </ScrollView>
      )
    }
    return (
      <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
      <View style={style.header}>
        <View>
          <View>
            <Text style={{flexDirection: 'row'}} >
              <Text style={{fontSize: 28}}>Hello, </Text>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                Jenish 
                </Text>

            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: '#FEDAC5'}}>Help yourself for select order</Text>
        </View>
        <Image source={require('../../assets/profile.png')} style={{height:50, width: 50, borderRadius: 25}}
        />
      </View>
      <View style={{
        marginTop:40,
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
        <View style={style.inputcontainer}>
          <Icon name='search' size={28} />
          <TextInput 
          style={{flex:1, fontSize:18}}
          placeholder='Search for food'
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name='tune' size={28} color='#FEDAC5' />
        </View>
      </View>
      <View>
      <ListCategories />
      </View>
      
    </SafeAreaView>
    )
  }


  const style=StyleSheet.create({
    header:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:20,
   },
   inputcontainer:{
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'light',
    alignItems: 'center',
    paddingHorizontal: 20,

   },

   sortBtn:{
    width:50,
    height: 50,
    marginLeft: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
   },
   catagoriesListContainer:{
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20
,
   },
   categorryBtn:{
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'

   },

   categorryBtnImgCon:{
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
   }
  });


export default Reservation



