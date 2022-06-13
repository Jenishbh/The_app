import React from "react";
import { View,Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import PrimaryButton from "../components/Button";




function customer_home (){



    return(


        <SafeAreaView 
        style={{flex:1 ,
        backgroundColor: 'white'}}>
            <View style={{height: 400}}>
                <Image style={{
                    width: '80%',
                    resizeMode: 'contain',
                    top: -80,
                    alignSelf: 'center'
                }} source={require('../assets/Res.png')} />
            </View>
            <View style={styles.textcontainer}>
                <View>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Delicious Food
                </Text>
                <Text 
                style={{marginTop: 20,
                fontSize: 18,
                textAlign: 'center',
                color: 'gray'

                }}>
                    Reserver yourself before anyone
                </Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={styles.curruntIndicetor}/>
                    <View style={styles.indicator}/>
                    <View style={styles.indicator}/>  
                </View>
                <PrimaryButton onPress={()=> navigation.navigate('Home')}
                title="Get Started"/>
            </View>
            
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    textcontainer:{
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom:40
        
    },
    indicatorContainer:{
        height:50,
        flex:1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'

    },

    curruntIndicetor:{
        height:12,
        width:30,
        borderRadius:10,
        backgroundColor: 'primary',
        marginHorizontal: 5
    },
    indicator:{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'gray',
        marginHorizontal: 5
    },

    
})


export default customer_home;