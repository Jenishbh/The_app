import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import {AuthLayout} from './AuthLayout'

import FormInput from '../../components/FormInput'
import utils from '../../api/utils'


const Signin =() => {

  const [email, setEmail]= React.useState('')
  const [password, setPassword]= React.useState('')
  const [emailError, setEmailError]= React.useState('')
  const [saveMe, setSaveMe]= React.useState(false)
  
  const [showPass, setShowPass] = React.useState(false)
    return (
      <AuthLayout
          title="Let's Log you in"
          subtitle="Welcome back You've been missed" >

            <View 
            style={{
              flex:1,
              marginTop: 24*2
            }}>

              {/* Form Input*/}

              <FormInput 
              lable='email' keyboardType='email-address'
              autoCompleteType='email'
              onChnage={(value) => {

                //validate email
                utils.validateEmail(value, setEmailError)

                setEmail(value)
              }}
              errorMsg={emailError}
              appendComponent={
                <View 
                style={{
                  justifyContent: 'center'
                }}>

                  <Image 
                  source={email == '' || (email != '' && emailError =='') ? require('../../assets/correct.png') : require('../../assets/cancle.png') }
                  style={{
                    width:20,
                    tintColor: email=='' ? 'gray' : (email !='' && emailError =='')? 'green': 'red',
                    height: 20
                  }}/>

                  </View>

              }
               />

               <FormInput 
               lable='password'
               secureTextentry={!showPass}
               autoCompleteType='password'
               containerStyle={{
                marginTop: 24,
               }}
               onChnage={(value) => setPassword(value)}
               appendComponent={
                <TouchableOpacity 
                style={{
                  width:40,
                  alignItems:'flex-end',
                  justifyContent: 'center'
                }}
                onPress={()=> setShowPass(!showPass)}    >

                <Image 
                  source={showPass ? require('../../assets/eye_close.png') : require('../../assets/eye.png')}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: 'gray'
                  }}/>

                </TouchableOpacity>
               }
               />

              {/* SAve me & Forgot Password*/}

              < View 
              style={{
                flexDirection: 'row',
                marginTop: 24,
                justifyContent: 'space-between',

              }} >

                <CustomSwitch
                    value={saveMe}
                    onChnage={(value) => setSaveMe(value)}
                />
              
              </View>

              {/* LogIN*/}

              {/* Sign Up*/}



            </View>
            


      </AuthLayout>
    )
  
}






export default Signin;