import { View } from 'react-native';
import React from 'react';
import CardsDoctors from '../components/CardsDoctors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DoctorsCardsNotification = () => {
	return (
		<KeyboardAwareScrollView>
			<View>
				<CardsDoctors />
			</View>
		</KeyboardAwareScrollView>
	);
};

export default DoctorsCardsNotification;
