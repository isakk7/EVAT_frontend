import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import useFetch from "../hooks/useFetch";

const PatientRegisterPage = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const cleanForm = () => {
    setValue("name", "");
    setValue("typeOfCancer", "");
    setValue("services", "");
    setValue("palliative", "");
    setValue("age", "");
  };
  const { patientRequest } = useFetch();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      Alert.alert("Agregar Paciente?", "", [
        {
          text: "Si",
          onPress: async () => {
            await patientRequest(data);
            Alert.alert("Agregado Correctamente");
          },
          style: "Agregado",
        },
        {
          text: "No",
          onPress: () => Alert.alert("No agregar"),
          style: "No Agregado",
        },
      ]);
    } catch (err) {
      console.log(err);
    }
    cleanForm();
  };
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Ingrese su nombre completo"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Tipo de cancer"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="typeOfCancer"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Servicios"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="services"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Paliativo"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="palliative"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Edad"
              keyboardType="numeric"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              maxLength={2}
              value={value}
            />
          )}
          name="age"
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          color={"green"}
          title="Añadir"
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },

  container: {
    marginTop: "25%",
    marginVertical: "10%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    margin: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 15,
  },
});

export default PatientRegisterPage;
