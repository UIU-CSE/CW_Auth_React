import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const SignInScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome To SignInScreen</Text>
      <Button
        title="Dont Have an Account? Sign Up!"
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
      />
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
