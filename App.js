import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import * as firebase from "firebase/app";

import { AuthProvider, AuthContext } from "./src/providers/AuthProvider";

const firebaseConfig = {
  apiKey: "AIzaSyCYoeN-L5rC-G5-o3w29C3EmMhh72JiMVs",
  authDomain: "mad-fall22.firebaseapp.com",
  projectId: "mad-fall22",
  storageBucket: "mad-fall22.appspot.com",
  messagingSenderId: "939369558974",
  appId: "1:939369558974:web:962128e2a0909b64b8ffef",
};
if (!firebase.length) {
  firebase.initializeApp(firebaseConfig);
}

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignUp">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>{auth.isLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}</NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
