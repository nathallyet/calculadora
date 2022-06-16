import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f0f0f0",

    fontSize: 40,

    textAlign: "center",

    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,

    borderWidth: 1,
    borderColor: "#888",
  }
})

export default Button;