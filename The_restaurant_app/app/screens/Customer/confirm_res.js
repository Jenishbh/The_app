import { Dimensions, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ZigzagView from "react-native-zigzag-view"
import QRCode from 'react-native-qrcode-svg';
import { PrimaryButton } from '../../components/Button';




function Confirm_res ({navigation}){





    const Receipt = () => {
        let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
        return <ZigzagView
          backgroundColor={'white'}
          surfaceColor="#F7F7F7"
          top={false}
          
          style={{
            marginTop:15 ,
            width:300,
            alignSelf:'center',
            
            
          }}
        >
            <View style={{marginVertical:20}}>
          <View style={{borderRadius:40, backgroundColor:'lightgray', height:70,width:70, justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:20, textAlign:'center',color:'white'}}>JP</Text>
                
          </View>
          <Text style={{fontSize:15, textAlign:'center',color:'gray',paddingTop:5}}>NAME</Text>
          <Text style={{fontSize:18, textAlign:'center',color:'#414449',paddingTop:5}}>Jenish Patel</Text>
          </View>

          <View style={{marginVertical:20}}>

          <Text style={{fontSize:15, textAlign:'center',color:'gray'}}>PHONE NUMBER</Text>
          <Text style={{fontSize:18, textAlign:'center',color:'#414449',paddingTop:5}}>+1 925 555 4343</Text>

          </View>
          <View style={{marginVertical:20}}>

          <Text style={{fontSize:15, textAlign:'center',color:'gray'}}>EMAIL</Text>
          <Text style={{fontSize:18, textAlign:'center',color:'#414449',paddingTop:5}}>Testproject2022@gmail.com</Text>

          </View>
          <View style={{borderBottomColor:'lightgray',borderBottomWidth:0.5,width:250,alignSelf:'center'}}></View>

          <View style={{marginVertical:20}}>

          <Text style={{fontSize:30, textAlign:'center',color:'#67C8D5'}}>Scan QR Code</Text>
          <Text style={{fontSize:15, textAlign:'center',color:'#414449', paddingHorizontal:13, paddingTop:10}}>Is available, the waiter can easilt check the user in</Text>
          <View style={{alignSelf:'center',paddingTop:10}} >
          <QRCode 
           value="Just some string value"
           logo={{uri: base64Logo}}
           logoSize={30}
           logoBackgroundColor='transparent'
           />
           </View>
          </View>
        </ZigzagView>
      }



    return(

        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            {/* {Header} */}
            <View style={{ 
                paddingVertical:10,
                marginHorizontal:20,
                alignContent: 'space-between',
                flexDirection: 'row',
                }}>
                
               
                <Icon name ='arrow-back-ios' size={28} onPress={navigation.goBack}/>
            
                
            </View>
            <Text style={{fontSize: 20,alignSelf:'center' }} onPress={navigation.goBack}>Receipt</Text>
            <Receipt />

            <View style={{marginTop:20}}>
                
                <PrimaryButton
                    title={'Order Now'}
                    btnContainer={{
                        backgroundColor:'#67C8D5',
                        height:60,
                        width:300,
                        borderRadius:60,
                        alignSelf:'center'
                    }} />
                
                
            </View>
            <View >
                
                
            </View>
        </SafeAreaView>
    )

}


export default Confirm_res; 
 