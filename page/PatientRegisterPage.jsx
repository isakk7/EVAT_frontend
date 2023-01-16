import { View } from "react-native";
import React from "react";
import Button from "../components/Button";

const PatientRegisterPage = ({ navigation }) => {
  return (
    <View>
      <Button
        text="Regresar a login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        text="Ir a nurse form"
        onPress={() => {
          navigation.navigate("Registro de Personal");
        }}
      />
    </View>
  );
};

export default PatientRegisterPage;
