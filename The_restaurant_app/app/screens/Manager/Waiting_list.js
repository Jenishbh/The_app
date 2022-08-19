import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const DATA = [
  {id: '1',title: 'Peter', subtitle: "8 people",},
  {id: '2',title: 'John Smith',subtitle: "8 people",},
  {id: '3',title: 'Sarah Huang',subtitle: "8 people",},
  {id: '4',title: 'Tim Coook',subtitle: "8 people",},
  {id: '5',title: 'Third Item',subtitle: "8 people",},
  {id: '6',title: 'Third Item',subtitle: "8 people",},
  {id: '7',title: 'Third Item',subtitle: "8 people",},
  {id: '8',title: 'Third Item',subtitle: "8 people",},
  {id: '9',title: 'Third Item',subtitle: "8 people",},
  {id: '10',title: 'Third Item',subtitle: "8 people",},];

const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
const renderItem = ({ item }) => (
    <Item title={item.title} subtitle={item.subtitle} />
);
  

export default function Waitinglist(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

Waitinglist.navigationOptions={
  title:'Waiting List',
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },

  item: {
    backgroundColor: '#ffdca3',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 14,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight:"bold",
    //color:"white",
  },
  subtitle:{
    fontSize: 16,
    color:"black",
  }
});