import React from "react";
import { View,Image, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import PrimaryButton from "../../components/Button";
import CalendarPicker from 'react-native-calendar-picker';


function menu(){

    return(

        <View 
        style={{flex:1,
            backgroundColor: 'white'}}
            >
                

                
                <View >
                
                    <Image  source={require('../../assets/reservation.jpg') }
                    style={{height: 270, width:500, }} />

                
                   
                </View>
                <View>
                <View style ={{borderRadius: 25, height: 100, width: 20, top : 150, borderColor: 'gray', backfaceVisibility: 'visible' }}/>

                    
                     
                </View>

                <View>
                    <TextInput 
                    style={style.input}
                    placeholder={' Phone: '}
                    placeholderTextColor='pink' />
                   
                </View>

                <View >
                    <TextInput 
                    style={style.input}
                    placeholder={' How many people: '}
                    placeholderTextColor='pink'/>
                       
                </View>

                <View >
                    <TextInput 
                    style={style.input}
                    placeholder={' Date: '}
                    placeholderTextColor='pink'/>
                        
                </View>

                <View>
            

                <PrimaryButton  onPress={() => ('confirm_res') }
                    title='submit'/>
                </View>


        </View>
    )


    


}


const style = StyleSheet.create({

        input:{
            flex:1,
      padding: 5,
      marginBottom: 10,
      backgroundColor: 'orange',
      borderRadius:20,
        }
})




export default menu;