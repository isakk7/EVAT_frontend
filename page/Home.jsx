import { View, ScrollView } from 'react-native';
import React from 'react';
import CardsPatients from '../components/CardsPatients';

const Home = () => {
	return (
		<ScrollView>
			<View>
				<CardsPatients />
			</View>
		</ScrollView>
	);
};

export default Home;
