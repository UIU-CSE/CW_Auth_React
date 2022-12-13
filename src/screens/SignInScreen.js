import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "@rneui/themed";

const SignInScreen = (props) => {
  return (
    <View>
      <Card>
        <Card.Title>Welcome to AuthApp</Card.Title>
        <Card.Divider />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button title="Sign In!" type="solid" />
        <Button
          title="Dont have an Account? Sign Up"
          type="clear"
          onPress={() => {
            props.navigation.navigate("SignUp");
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
});

export default SignInScreen;
