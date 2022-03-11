import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    margin: 10
  },
  bg_primary: {
    backgroundColor: '#2196F3'
  },
  bg_danger: {
    backgroundColor: '#F93154'
  },
  bg_disabled: {
    backgroundColor: '#cccccc'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export const rippleStyle = {
  color: "light-gray",
  borderless: false,
  radius: 5,
  foreground: false
}