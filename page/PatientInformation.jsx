import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PatientInformation = () => {
    return (
        <View>
            <Text style = { styles.labelTittle }>Informacion del Paciente:</Text>
            <View style = { styles.lineStyle } />
            <Text style = { styles.labelSubTittle } >Nombre:</Text>
            <Text style = { styles.patientInfo }>Juan Alberto Martinez</Text>
            <View style = { styles.lineStyle } />
            <Text style = { styles.labelSubTittle } >Edad:</Text>
            <Text style = { styles.patientInfo }>13</Text>
            <View style = { styles.lineStyle } />
            <Text style = { styles.labelSubTittle } >Dx Oncologicó:</Text>
            <Text style = { styles.patientInfo }>si</Text>
            <View style = { styles.lineStyle } />
            <Text style = { styles.labelSubTittle } >Paliativo:</Text>
            <Text style = { styles.patientInfo }>si</Text>
            <View style = { styles.lineStyle } />
            <Text style = { styles.labelSubTittle } >Enfermera:</Text>
            <Text style = { styles.patientInfo }>Erika Valverde</Text>
            <View style = { styles.lineStyle } />
        </View>
    )
}

styles = StyleSheet.create({
    labelTittle:{
        fontSize: 20,
        fontWeight:'bold',
        padding:'4%',
        color:'#54B435'
    },
    lineStyle:{
        borderWidth: 0.4,
        borderColor:'#B2B2B2',
        margin:10,
    },
    labelSubTittle:{
        fontSize:17,
        fontWeight: 'bold',
        padding:'3%',
        color:'#C21010'
    },
    patientInfo:{
        fontSize:15,
        padding:'4%'
    }
})

export default PatientInformation
