import {
	StyleSheet,
	TextInput,
	SafeAreaView,
	Text,
	Alert,
	View, 
	TouchableOpacity
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { Picker } from "@react-native-picker/picker";
import EvatAlgorithm from "../evat-algorithm";
import { useNavigation } from "@react-navigation/native"
const DailyForm = () => {
	const navigation = useNavigation()
	const { control, handleSubmit, setValue, watch } = useForm();
	const [ selectedValue, setSelectedValue] = useState("36");
	const { postEvatForm } = useFetch();
	const { heartRateTable, breathingRateTable, resultRateLevel } = EvatAlgorithm;

	const cleanForm = () => {
		setValue("hour", "");
		setValue("temperature", "");
		setValue("bloodPressure", "");
		setValue("FC", "");
		setValue("FR", "");
		setValue("SO2", "");
		setValue("ltsO2", "");
		setValue("pain", "");
		setValue("capillaryRefill", "");
		setValue("rightPupil", "");
		setValue("leftPupil", "");
		setValue("neuro", "");
		setValue("cardio", "");
		setValue("resp", "");
		setValue("nurseConcern", "");
		setValue("familyConcern", "");
	};

	const onSubmit = async data => {
		try {
			Alert.alert("Formulario llenado", "", [
				{
					text: "Ok",
					onPress: async () => {
						await postEvatForm({ ...data, temperature: selectedValue, idPatient: "638a2906ab6e8d284d203e22" });
					}
				}
			]);
		} catch (err) {
			console.log(err);
		}
		cleanForm();
	};
    useEffect(()=>{
        setValue(
            "resp",
            resultRateLevel(15, parseInt(watch("FR")) || 0, breathingRateTable)
          );
    },[watch("FR")])

    useEffect(()=>{
        setValue(
            "cardio",
            resultRateLevel(15, parseInt(watch("FC")) || 0, breathingRateTable)
          );
    },[watch("FC")])

	return (
		<KeyboardAwareScrollView enableResetScrollToCoords={false}>
			<SafeAreaView style={styles.container}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							maxLength={2}
							placeholder="Hora de revision"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="hour"
				/>
				<View style={styles.picar}>
					<Picker
						selectedValue={selectedValue}
						onValueChange={(itemValue) =>
							setSelectedValue(itemValue)}
					>
						<Picker.Item label="Temperatura" value="0" />
						<Picker.Item label="35-35.5" value="35" />
						<Picker.Item label="36-36.5" value="36" />
						<Picker.Item label="37-37.5" value="37" />
						<Picker.Item label="38-38.5" value="38" />
						<Picker.Item label="39-39.5" value="39" />
					</Picker>
				</View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Presion arterial mmHg"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="bloodPressure"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Frecuencia cardiaca"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="FC"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Frecuencia respiratoria"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="FR"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="SO2"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="SO2"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="LtsO2"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="ltsO2"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Dolor"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="pain"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Llenado capilar"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="capillaryRefill"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Pupila derecha"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="rightPupil"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Pupila izquierda"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="leftPupil"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Neuro"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="neuro"
				/>
				 <Text style={styles.text}>Cardio:{resultRateLevel(15, parseInt(watch("FC"))|| 0, heartRateTable)}</Text>

                 <Text style={styles.text}>Respiratorio:{resultRateLevel(15, parseInt(watch("FR"))|| 0, heartRateTable)}</Text>
                 
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Preocupación enfermera"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="nurseConcern"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Preocupación familia"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="familyConcern"
				/>
                	<TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit(onSubmit)}>
					<Text style={styles.ButtonText}>Guardar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("Notifications")}>
					<Text style={styles.ButtonText}>Notificar</Text>
				</TouchableOpacity>
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
	picar: {
		borderColor: "gray",
		width: "80%",
		borderWidth: 1,
		borderRadius: 10,
		padding: 3,
		margin: 20,
	},

	container: {
		marginTop: "10%",
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
	buttonContainer: {
		backgroundColor: "green",
		marginBottom: "5%",
		marginTop: "5%",
			paddingHorizontal: 50,
			paddingVertical: 10,
			alignItems: "center",
			borderRadius: 8,
			width: "80%",
		},
		ButtonText: {
			color: "#ffffff",
			borderRadius: 10,
		},
        text:{
            borderColor: "gray",
		width: "80%",
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		margin: 20,
        }
});

export default DailyForm;
