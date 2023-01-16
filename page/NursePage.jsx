import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Forms from ".././components/Forms";

const NursePage = () => {
  const [selectedValue, setSelectedValue] = useState("Registro Enfermeras");
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 250, margin: "5%" }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Registro Enfermeras" value="Enfermera" />
        <Picker.Item label="Reistro Doctores" value="Doctor" />
        <Picker.Item label="Reistro Residente" value="Residente" />
      </Picker>
      <Forms></Forms>
    </View>
  );
};

export default NursePage;
