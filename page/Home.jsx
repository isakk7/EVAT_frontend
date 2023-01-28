import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.cardContainer}>
            <Text>nombre: Juan</Text>
            <Text>edad: 13</Text>
            <Text>Estado: Verde</Text>
            <TouchableHighlight
                style={styles.buttonForm}
                onPress={() => navigation.navigate('DailyForm')}
            >
                <Text style={styles.textStyle}>Formulario Diario</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        borderWidth: 1,
        width: '70%',
        height: '20%',
        borderRadius: 4,
        marginTop: '30%',
        marginLeft: '15%',
    },
    buttonForm: {
        backgroundColor: 'green',
        width: '50%',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 4,
    },
    textStyle: {
        color: 'white',
    },
})

export default Home
