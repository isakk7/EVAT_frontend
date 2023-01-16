import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import Button from "../components/Button";
import { object } from "prop-types";
import useFetch from "../hooks/useFetch";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const propTypes = {
  navigation: object,
};

const LoginPage = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { loginRequest } = useFetch();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      console.log(await loginRequest(data));
      console.log("te has logeado");
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/1.jpg")} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu usuario"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              required={true}
              placeholder="Ingresa tu contraseña"
            />
          )}
          name="password"
        />
        <Button
          title="Submit"
          placeholder="Ingresar"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
	input: {
		borderColor: "gray",
		width: "80%",
		borderWidth: 2,
		padding: 15,
		margin: 10,
		borderRadius: 8,
	},

	image: {
		width: "40%",
		height: "35%",
		borderRadius: 40,
		marginBottom: "5%",
	},
	container: {
		justifyContent: "center",
		margin: "auto",
		alignItems: "center",
		marginTop: "45%",
	},
});

LoginPage.propTypes = propTypes;
export default LoginPage;
