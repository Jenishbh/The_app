import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, useState } from 'react-native';
=======
import { StyleSheet, Text, View, SafeAreaView ,Alert, Button} from 'react-native';
>>>>>>> d3827ea26fab92d9fd468a1f6be12aba4e936122

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Hello Jenish</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
=======
    <SafeAreaView style={styles.container}>
      <Text >Hello Jenish</Text>
      <Button color='orange'
      title='Click Me'
      onPress={()=>Alert.alert("Button press", "You press button", [ { text: "Yes"}, {text : "No"},]) }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
>>>>>>> d3827ea26fab92d9fd468a1f6be12aba4e936122
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: 'blue',
=======
    backgroundColor: 'white',
>>>>>>> d3827ea26fab92d9fd468a1f6be12aba4e936122
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
