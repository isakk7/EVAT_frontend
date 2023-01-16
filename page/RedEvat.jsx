import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RedEvat = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <TextInput style={styles.inputRed} placeholder="Nombre del paciente" />
        <TextInput style={styles.inputRed} placeholder="Edad" />
        <TextInput style={styles.inputRed} placeholder="Tipo de cáncer" />
        <TextInput style={styles.inputRed} placeholder="Paliativo" />
        <TextInput style={styles.inputRed} placeholder="Servicio/Unidad" />
        <TextInput style={styles.inputRed} placeholder="Mes" />
        <TextInput
          style={styles.inputRed}
          placeholder="Fecha Primer EVAT rojo"
        />
        <TextInput
          style={styles.inputRed}
          placeholder="Hora Primer EVAT rojo"
        />
        <TextInput style={styles.inputSum} placeholder="CN" />
        <TextInput style={styles.inputSum} placeholder="CV" />
        <TextInput style={styles.inputSum} placeholder="R" />
        <TextInput style={styles.inputSum} placeholder="PE" />
        <TextInput style={styles.inputSum} placeholder="Total EVAT" />
        <TextInput style={styles.inputRed} placeholder="Consulta a UCI" />
        <TextInput style={styles.inputRed} placeholder="Hora de consulta" />
        <TextInput
          style={styles.inputRed}
          placeholder="Intervención?(UCI o Pedi)"
        />
        <TextInput style={styles.inputRed} placeholder="Hora de intervención" />
        <TextInput style={styles.inputRed} placeholder="Tipo de intervención" />
        <TextInput
          style={styles.inputRed}
          placeholder="Duración de EVAT rojo(Horas)"
        />
        <TextInput style={styles.inputRed} placeholder="Evento de deterioro"  />
        <TextInput style={styles.inputRed} placeholder="Tipo de Evento" />
        <TextInput style={styles.inputRed} placeholder="Fecha de Evento" />
        <TextInput style={styles.inputRed} placeholder="Hora de Evento" />
        <TextInput style={styles.inputRed} placeholder="Traslado a UCI/UTI" />
        <TextInput style={styles.inputRed} placeholder="Fecha de traslado" />
        <TextInput style={styles.inputRed} placeholder="Hora de Traslado" />
        <TextInput style={styles.inputRed} placeholder="Nombre del paciente" />
        <TextInput style={styles.inputRed} placeholder="Estancia UCI/UTI" />
        <TextInput
          style={styles.inputRed}
          placeholder="Mortalidad de UCI o piso"
        />
        <TextInput placeholder="Escriba un Comentario" />
      </View>
    </KeyboardAwareScrollView>
  );
};
styles = StyleSheet.create({
  container: {
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    margin: "8%",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  inputRed: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    margin: "1%",
  },
  inputSum: {
    width: "20%",
    borderWidth: 1,
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RedEvat;
