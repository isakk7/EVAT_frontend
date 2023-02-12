import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Settings = () => {
	const navigation = useNavigation();

	return (
		<View>
			<ScrollView>
				<View style={styles.box}></View>
				<View style={styles.box1}>
					<Image
						style={styles.image}
						source={require('../assets/1.jpg')}
					></Image>
				</View>
				<View style={styles.input}>
					<Text>Maria Sanchez</Text>
				</View>
				<View style={styles.input}>
					<Text>maria_sanchez@gmail.com</Text>
				</View>
				<TouchableOpacity
					style={styles.buttonOut}
					onPress={() => navigation.navigate('Login')}
				>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOut: {
		alignSelf: 'center',

		justifyContent: 'center',
		width: '90%',
		padding: 20,
		paddingBottom: 22,
		borderRadius: 10,
		shadowOpacity: 80,
		elevation: 15,
		marginTop: 20,
		marginBottom: 40,
		backgroundColor: 'red',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 15,
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: 10,
		justifyContent: 'center',
	},
	box: {
		padding: 10,
		width: '100%',
		backgroundColor: '#000',
		height: 150,
	},
	box1: {
		alignItems: 'center',
	},
	image: {
		width: 140,
		height: 140,
		borderRadius: 100,
		marginTop: -70,
	},
	input: {
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
		width: '90%',
		padding: 20,
		paddingBottom: 22,
		borderRadius: 10,
		shadowOpacity: 80,
		elevation: 15,
		marginTop: 20,
	},
});

export default Settings;
