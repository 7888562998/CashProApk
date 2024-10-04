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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
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
            onPress={() => navigation.navigate("Home")}
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
