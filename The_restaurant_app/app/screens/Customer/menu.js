import React, {useState} from "react";
import { View,Image, Text, StyleSheet, SafeAreaView, TextInput, ScrollView } from "react-native";
import {PrimaryButton} from "../../components/Button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Menu(){

    const [time, setTime] = useState('');
    const [peopleCount, setpeopleCounr] = useState(0);
    return(
        <ScrollView>
        <View 
        style={{flex:1,
            backgroundColor: 'white'}}
            >
                

                
                <View style={{height: 400, width:500,justifyContent: 'center', alignContent: 'center' }} >
                
                    <Image  source={require('../../assets/reservation.png') }
                    style={{height: 270, width:500, }} />

                <View style ={{borderRadius: 15,
                bordercolor: 'white', 
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,  
                height: 100, width: 320, 
                top : -20, backgroundColor: 'white', alignSelf: 100, left: 35,  }}> 
                
                
                <Text></Text>
                </View>                   
                </View>

                <View style={{marginHorizontal: 20, justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10, }}>
                <Text style={{fontSize:16, fontWeight:'bold',}}> Details</Text>
                <Text style={{fontSize:14, color: 'gray', alignSelf:'flex-start', paddingTop: 10}}> Seize the Momemt.Meet Spark,a mini drone that features all of DJI's signature technologies, allowing you to size the moment whenever you feel inspired </Text>
                 
                 </View>

                 <View style={{marginHorizontal: 20, marginVertical:20, paddingVertical: 20, flexDirection: 'row', justifyContent:'space-between'}}  >

                    <Text style={{fontWeight: 'bold'}} > Number Of Persons</Text>
                    <View style={{alignSelf:'baseline'}}>
                    <Icon name='minus-circle-outline' size={18}  onPress={()=> console.log('press')}/>
                    
                    </View>
                 </View>

                 <View style={{marginHorizontal: 20, marginVertical:20, paddingVertical: 20}}>

                 <Text style={{fontWeight: 'bold'}} > Pick a Time</Text>

                 </View>

                 <View style={{marginHorizontal: 20, marginVertical:20, paddingVertical: 20}}>

                 <Text style={{fontWeight: 'bold'}} > AddComments</Text>

                 <TextInput style={{height:100, width:350,borderRadius: 15,
                 backgroundColor: 'white',borderColor:'white',  shadowColor: 'gray', shadowOffset: {height: 4, width:-2}, shadowOpacity: 0.2, shadowRadius: 3
                 
                 }} placeholder='Write Comments' />

                 </View>




                

                

               

                <View>
            

                <PrimaryButton  onPress={() => ('confirm_res') }
                    title='Book Now'/>
                </View>


        </View>
        </ScrollView>
    )


    


}






export default Menu;