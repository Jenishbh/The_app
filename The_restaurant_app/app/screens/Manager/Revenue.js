import React,{useState, setValue} from 'react';
import {View, Switch, SafeAreaView, StyleSheet,Button, Image, ImageBackground,Text, TextInput,TouchableOpacity, ScrollView, Dimensions} from 'react-native';
//import {PrimaryButton} from '../../components/Button'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const RevLineChart = () => {
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.header}>Revenue</Text>
        
          <View style={styles.selectionContainer}>
            <TouchableOpacity>
              <Text style={styles.selection}>Year / </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.selection}>Month / </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.selection}>Day </Text>
            </TouchableOpacity>
          </View>
        
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [Math.random() * 10000+8000,
                  Math.random() * 10000+8000,
                  Math.random() * 10000+8000,
                  Math.random() * 10000+8000,
                  Math.random() * 10000+8000,
                  Math.random() * 10000+8000,
                  Math.random() * 10000+8000,],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.9}
          height={Dimensions.get('window').height * 0.3}
          chartConfig={{

            //backgroundGradientToOpacity: 
            backgroundColor:'transparent',
            backgroundGradientTo: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientToOpacity:'white',
            verticalLabelRotation:'left',
            overflow:'visible',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 2,
              marginTop: 20,
            },
          }}
          style={{
            marginVertical: 8,

            padding: 2,
          }}
        />
      </View>
    );
  };
  const MyPieChart = () => {
    const data = [
        {
          name: "Checked-in",
          number: 20,
          color: "blue",
          legendFontColor: "black",
          legendFontSize: 15
        },
        {
          name: "Non-check-in",
          number: 10,
          color: "red",
          legendFontColor: "black",
          legendFontSize: 15
        }
      ];
    
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
       // strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    
    const screenWidth = Dimensions.get("window").width; 

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.header}>Check In Percentage</Text>
        <View style={styles.containerPie}>
          <PieChart
                data={data}
                width={screenWidth*0.9}
                height={Dimensions.get('window').height * 0.25}
                chartConfig={chartConfig}
                accessor={"number"}
                backgroundColor={"white"}
                paddingLeft={10}
                borderRadius={3}
            />
            </View>
      </View>
    );
  };
  export default function Revenue() {
 
    return (
      
        <ScrollView style={{flex: 1, marginVertical:30, backgroundColor:'white'}}>
          
          <View style={styles.revContainer}>
          <Text style={styles.revenueLabel}>Today</Text>
            <Text style={styles.revenue}>$1,500</Text>
            <Text style={styles.date}>{new Date().getMonth()+1}/{new Date().getDate()}/{new Date().getFullYear()}</Text>
          </View>
          <View style={styles.container}>
            <View>
              <RevLineChart />
            </View>
          </View>
  
          <View style={styles.container}>
            <View>
              <MyPieChart />
            </View>
          </View>
          
        </ScrollView>
        
      );
  }

Revenue.navigationOptions={
  title:'Revenue',
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor: '#bed1eb',
  },
  headerTintColor: 'black',
  headerTintStyle:{
    fontWeight:'bold',
  }

}

const styles = StyleSheet.create({
    revContainer:{
      flex:1,
      backgroundColor: '#044cb8',
      justifyContent: 'center',
      textAlign:'center',
      width: '96%',
      alignSelf:'center',
      borderRadius:10,
    },
    chartContainer:{
      flex: 10,
      backgroundColor: '#bed1eb',
      justifyContent: 'center',
      borderRadius: 8,
      alignSelf:'center'
    },
    container: {
      flex: 18,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      borderRadius: 10,
      // width: '80%',
      alignSelf:'center'
    },
    header: {
      textAlign: 'center',
      fontSize: 20,
      padding: 8,
      marginTop: 16,
      fontWeight:'bold',
    },
    selectionContainer: {
      flexDirection: 'row',
      textAlign: 'center',
      fontSize: 16,
      alignSelf:'center'
    },
    selection: {
      textAlign: 'center',
      fontSize: 16,
      alignSelf:'center'
    },
    revenueLabel:{
      marginTop: 40,
      fontFamily: 'tahoma',
      color:'white',
      fontSize: 30,
      textAlign:'center',
      alignSelf:'center'
    },
    revenue:{
      fontFamily: 'lucida grande',
      color:'white',
      fontSize: 46,
      padding: 20,
      textAlign:'center',
      alignSelf:'center'
    },
    date:{
      fontFamily: 'lucida grande',
      color:'white',
      fontSize: 16,
      paddingBottom: 10,
      alignSelf:'center'
    },
  });
  
  