import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const SignUpScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome To SignUpScreen</Text>
      <Button
        title="Already Have an Account? Sign In!"
        onPress={() => {
          props.navigation.navigate("SignIn");
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

export default SignUpScreen;
