import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Boton = (props) => {

    const { onPress,text }= props

    return (
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
        >
            <Text style= {styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton

const styles= StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'blue',
        marginBottom: '25%',
        marginTop:'10%',
        paddingHorizontal: 50,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius:'8%',
    
    },
    buttonText:{
        color:'#ffffff',
        borderRadius:'10%',
    }
})