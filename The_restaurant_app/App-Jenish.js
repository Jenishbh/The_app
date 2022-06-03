import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView ,Alert, Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello Jenish</Text>
      <Button color='orange'
      title='Click Me'
      onPress={()=>Alert.alert("Button press", "You press button", [ { text: "Yes"}, {text : "No"},]) }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
