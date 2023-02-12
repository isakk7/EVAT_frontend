import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useFetchDataById from "../hooks/useFetchDataById";
import useFetch from "../hooks/useFetch";

const CardsPatients = () => {
  const { getAllPatientsNurse } = useFetch();
  const { data } = useFetchDataById(
    getAllPatientsNurse,
    "63b1f362e650d1d3e3dfe5ae",
  );
  const navigation = useNavigation();

  return data.map(patient => (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <MaterialCommunityIcons
          name="account-heart"
          size={50}
          color="green"
          onPress={() => navigation.navigate("PatientInformation")}
        />
        <Text style={styles.infText}>Name: {patient.name}</Text>
        <Text style={styles.infText}>Birth date: {patient.birthDate}</Text>
        <Text style={styles.infText}>
          Oncological Dx: {patient.typeOfCancer}
        </Text>
        <TouchableHighlight
          style={styles.buttonForm}
          onPress={() => navigation.navigate("DailyForm")}
        >
          <Text style={styles.textStyle}>Daily form</Text>
        </TouchableHighlight>
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    width: "70%",
    borderRadius: 4,
    marginTop: "15%",
    marginLeft: "15%",
    padding: 1,
    elevation: 8,
    backgroundColor: "white",
    display: "flex",
  },
  buttonForm: {
    backgroundColor: "green",
    width: "50%",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 4,
    margin: "6%",
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
  },
  infText: {
    fontSize: 15,
    marginTop: "1%",
  },
});

export default CardsPatients;
