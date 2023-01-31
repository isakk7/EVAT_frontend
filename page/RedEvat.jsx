import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm, Controller } from 'react-hook-form'
import useFetch from '../hooks/useFetch'

const RedEvat = () => {
    const { control, handleSubmit, setValue } = useForm()

    const cleanForm = () => {
        setValue('NamePatient', '')
        setValue('Birthdate', '')
        setValue('Ocologicdx', '')
        setValue('Palliative', '')
        setValue('Service/unit', '')
        setValue ('Month', '')
        setValue('DateFirstEVARed', '')
        setValue('TimeFirstRedEVAT', '')
        setValue('CN', '')
        setValue('CV', '')
        setValue('R', '')
        setValue('PE', '')
        setValue('TotalEvat', '')
        setValue('ConsultUCI', '')
        setValue('ConsultationTime', '')
        setValue('Intervention', '')
        setValue('InterventionTime', '')
        setValue('TypeOfIntervention', '')
        setValue('RedEVATDuration', '')
        setValue('ImpairmentEvent', '')
        setValue('EventType', '')
        setValue('EventDate', '')
        setValue('EventTime', '')
        setValue('Transfer', '')
        setValue('TransferDate', '')
        setValue('TransferTime', '')
        setValue('Stay', '')
        setValue('Mortality', '')
        setValue('Comment', '')
    }
    const { redEvatpost } = useFetch()

    const onSubmit = async data => {
        try {
            Alert.alert('Agregar Paciente?', '', [
                {
                    text: 'Si',
                    onPress: async () => {
                        await redEvatpost(data)
                        Alert.alert('Guardato Correctamente')
                    },
                    style: 'Agregado',
                },
                {
                    text: 'No',
                    onPress: () => Alert.alert('No agregar'),
                    style: 'No Agregado',
                },
            ])
        } catch (err) {
            console.log(err)
        }
        cleanForm()
    }
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Nombre del paciente"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="NamePatient"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Fecha de Nacimiento"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Birthdate"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Dx Oncològico"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Ocologicdx"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Paliativo"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Palliative"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Servicio/Unidad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Service/unit"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                          style={styles.inputRed} 
                          placeholder="Mes" 
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                    )}
                    name="Month"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Fecha Primer EVAT rojo"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="DateFirstEVARed"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Hora Primer EVAT rojo"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="TimeFirstRedEVAT"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                          style={styles.inputRed} 
                          placeholder="CN" 
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                    )}
                    name="CN"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                          style={styles.inputRed} 
                          placeholder="CV"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value} 
                        />
                    )}
                    name="CV"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                          style={styles.inputRed} 
                          placeholder="R" 
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                      />
                    )}
                    name="R"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                          style={styles.inputRed} 
                          placeholder="PE"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value} 
                        />
                    )}
                    name="PE"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Total EVAT"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="TotalEvat"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Consulta a UCI"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="ConsultUCI"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Hora de consulta"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="ConsultationTime"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Intervención?(UCI o Pedi)"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Intervention"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Hora de intervención"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="InterventionTime"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Tipo de intervención"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="TypeOfIntervention"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Duración de EVAT rojo(Horas)"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="RedEVATDuration"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Evento de deterioro"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="ImpairmentEvent"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Tipo de Evento"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="EventType"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Fecha de Evento"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="EventDate"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Hora de Evento"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="EventTime"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Traslado a UCI/UTI"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Transfer"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Fecha de traslado"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="TransferDate"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Hora de Traslado"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="TransferTime"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Estancia UCI/UTI"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Stay"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputRed}
                            placeholder="Mortalidad de UCI o piso"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Mortality"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputComment}
                            placeholder="Escriba un Comentario"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Comment"
                />

                <TouchableOpacity 
                  style={styles.btnSave}
                  onPress={handleSubmit(onSubmit)}
                >
                    <Text style = {styles.textBtn}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        margin: '8%',
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 8,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inputRed: {
        width: '80%',
        height: 60,
        borderWidth: 1,
        margin: '1%',
        borderRadius: 8,
        marginTop: '5%',
        alingnText: 'center',
    },
    inputComment: {
        width: '80%',
        height: 120,
        borderWidth: 1,
        margin: '1%',
        borderRadius: 8,
        marginTop: '5%',
    },
    btnSave: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ADE792',
        borderRadius: 8,
        marginTop: '4%',
        fontSize: 20,
    },
    textBtn:{
        color: '#fff',
    }
})


export default RedEvat

