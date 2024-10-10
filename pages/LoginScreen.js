import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import axiosInstance from "../services/service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  
  const handleSubmit=async()=>{
    const data = {
      email,
      password: psw,
    };
    try {
      const result = await axiosInstance.post("/login", data);
      if (result.status === 200) {
        console.log(result.data.token,"result");
        await AsyncStorage.setItem('token', result.data.token);
        navigation.navigate("Home",{ reload: true });
      }
    } catch (error) {
      // toast.error("Invalid password or email");
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={{
        uri: "https://loan-wen-app.vercel.app/static/media/view-school-building.5ad82f1e578e7c49647a.jpg",
      }}
      style={styles.background}
    >
      {/* Add SafeAreaView and StatusBar */}
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={psw}
            onChangeText={(value) => setPsw(value)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
  input: {
    height: 40,
    width:'90%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom:15
  },
});
