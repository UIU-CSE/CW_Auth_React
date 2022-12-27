import { Input, Button, Card } from "@rneui/themed";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase } from "firebase/database";

const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    if (name && email && studentID && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
          // userCreds.user.updateProfile({ displayName: name });
          // const database = getDatabase();
          // const ref = database.ref("https://mad-fall22-default-rtdb.firebaseio.com");
          // ref
          //   .child("users/")
          //   .child(userCreds.user.uid)
          //   .set({
          //     name: name,
          //     sid: studentID,
          //     email: email,
          //   })
          //   .then(() => {
          //     alert("account created successfully");
          //     props.navigation.navigate("SignIn");
          //   });
          console.log(userCreds);
        })
        .catch((error) => {
          console.log("Firebase Error", error);
        });
    } else {
      alert("FIELDS ARE EMPTY!");
    }
  };

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to Auth App</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Name"
          onChangeText={(currentInput) => {
            setName(currentInput);
          }}
        />
        <Input
          placeholder="Student ID"
          onChangeText={(currentInput) => {
            setStudentID(currentInput);
          }}
        />
        <Input
          placeholder="Email"
          onChangeText={(currentInput) => {
            setEmail(currentInput);
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(currentInput) => {
            setPassword(currentInput);
          }}
        />
        <Button
          title="Sign Up!"
          type="solid"
          onPress={() => {
            handleSignUp();
          }}
        />
        <Button
          title="Already Have an Account?"
          type="clear"
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
});

export default SignUpScreen;
