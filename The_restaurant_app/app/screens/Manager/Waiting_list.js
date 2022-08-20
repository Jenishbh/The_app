import React,{useEffect,useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {db} from '../../database/firebase'
import { getAuth } from 'firebase/auth';



const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
const renderItem = ({ item }) => (
    <Item title={item.Name} subtitle={'Table: '+item.Table_Type+'\nCount:'+ item.Number_of_People}  />
);
  

export default function Waitinglist(){
  const auth = getAuth();
const user = auth.currentUser;
const [data, setdata]=useState()
  useEffect(()=>{
    const a =[]
    db.collection('Reservation').get().then(Doc=>{
      Doc.forEach((Doc)=>{
        a.push(Doc.data())
      })
      setdata(a)
    })

  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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