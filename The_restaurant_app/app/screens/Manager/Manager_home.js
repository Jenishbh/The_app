import React,{useState, setValue} from 'react';
import {View, Switch, SafeAreaView, StyleSheet, Image,Text,TouchableOpacity, Flatlist} from 'react-native';
import {Button} from 'react-native-elements';

export default function Manager_home({navigation}) {
  const buttonClickedHandler = () => {
      console.log('You have press the switch!');
      navigation.push('Waitinglist');
  };

  const [value, setValue] = useState("ON");

  const switchPressed = () => {
      console.log('Switch pressed');
      setValue("OFF");
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pressMenuHandler = () =>{
    navigation.navigate('Manager_Menu');
    navigation.push('Manager_Menu');
  }
  const pressReportHandler = () =>{
    navigation.navigate('Revenue');
    navigation.push('Revenue');
  }

  return (
      <SafeAreaView style={styles.background}>
        <Image style={styles.logo} source={require('../assets/table-management.png')} />
        <Text style={styles.check_in}> Checked-In </Text>
          <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton}>

              <Text style={styles.number}>08</Text>  
          </TouchableOpacity>
          
        <View style={styles.switchBotton}>
          <Text style={styles.onoff}>Slide to Turn On/Off Pre-check-In</Text>  
            <Switch
                marginTop = {10}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                activeText={'On'}
                inActiveText={'Off'}
                activeTextStyle={{fontSize:8, color:'black'}}
                inactiveTextStyle={{}}
                backgroundActive={'#767577'}
                backgroundInactive={'red'}
                value={isEnabled}
                style={{ transform:[{ scaleX: 2 }, { scaleY: 2 }] }}
                circleSize={5}
            />
        </View>

          <View style={styles.buttonStyleContainer}>
            <Button
                onPress={pressMenuHandler} 
                titleStyle={{
                color: "white",
                fontSize: 16,
                fontWeight:'bold'
                }}
                buttonStyle={{
                    backgroundColor: "#ffaf51",
                    height: 50,
                    width: 150,  
                    marginHorizontal:10,
                }}

                title="Menu"
            />
            <Button
                onPress={pressReportHandler} 
                titleStyle={{
                color: "white",
                fontSize: 16,
                fontWeight:'bold'
                }}
                buttonStyle={{
                    backgroundColor: "#ffaf51",
                    height: 50,
                    width: 150,  
                    marginHorizontal:10,
                }}

                title="Report"
            />
           </View>
      </SafeAreaView>
  
    );
}

Manager_home.navigationOptions={
  title:'Manager Home Page',
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
  background:{
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center'
  },

  logo:{
    height: 250,
    width: 400,        
    marginTop: 20
  },

  check_in:{
    color: '#ffaf51',
    fontFamily:'sans-serif',
    fontSize: 32,
    marginTop: 50,
    alignSelf:'center',
    fontWeight:'bold',
  },

  roundButton:{
      width: 150,
      height: 150,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#ffaf51',
  },

  number:{
    margin: 1,
    width: 300,
    height: 60,
    color: 'black',
    textAlign: 'center',
    fontSize: 34
  },

  switchBotton: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
      marginTop:20
  },

  onoff:{
    color: 'grey',
    textAlign: 'center',
    fontSize: 14,
  },

  buttonStyleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-evenly",
      marginTop: 10,
      marginVertical:30,
      padding:2,
      height: 20,
  },
   
});