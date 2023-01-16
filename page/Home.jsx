import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Home = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>nombre: Juan</Text>
      <Text>edad: 13</Text>
      <Text>Estado: Verde</Text>
      <TouchableHighlight style={styles.buttonForm}>
        <Text style={styles.textStyle}>Formulario Diario</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    borderWidth: 1,
    width: "70%",
    height: "20%",
    borderRadius: 4,
    marginTop: "30%",
    marginLeft: "15%",
  },
  buttonForm: {
    backgroundColor: "green",
    width: "50%",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 4,
  },
  textStyle: {
    color: "white",
  },
});

export default Home;
