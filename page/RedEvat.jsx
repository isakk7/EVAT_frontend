import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RedEvat = () => {
  const { control, handleSubmit, setValue } = useForm()

  const cleanForm = () => {
      setValue('namePatient', '')
      setValue('age', '')
      setValue('dxOncologico', '')
      setValue('paliative', '')
      setValue('service', '')
      setValue('month', '')
      setValue('datefirstevat', '')
      setValue('timefirstevat', '')
      setValue('cn', '')
      setValue('cv', '')
      setValue('r', '')
      setValue('pe', '')
      setValue('total', '')
      setValue('consultUci', '')
      setValue('timeConsult', '')
      setValue('intervencion', '')
      setValue('timeIntervencion', '')
      setValue('typeIntervencion', '')
      setValue('duracionEvat', '')
      setValue('event', '')
      setValue('typeEvent', '')
      setValue('dateEvent', '')
      setValue('timeEvent', '')
      setValue('traslado', '')
      setValue('datetraslado', '')
      setValue('timetraslado', '')
      setValue('estancia', '')
      setValue('floor', '')
      setValue('comment', '')
  }

  const { redEvatpost } = useFetch()

  const onSubmit = async data => {
      try {
          Alert.alert('Formulario Completado', '', [
              {
                  text: 'Si',
                  onPress: async () => {
                      await redEvatpost(data)
                      Alert.alert('Agregado Correctamente')
                      console.log(data)
                  },
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
                  name="namePatient"
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
                  name="age"
              />

              <Controller
                  control={control}
                  rules={{
                      required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                          style={styles.inputRed}
                          placeholder="Dx oncológico"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                      />
                  )}
                  name="dxOncologico"
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
                  name="paliative"
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
                  name="service"
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
                  name="month"
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
                  name="datefirstevat"
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
                  name="timefirstevat"
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
                  name="cn"
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
                  name="cv"
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
                  name="r"
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
                  name="pe"
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
                  name="total"
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
                  name="consultUci"
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
                  name="timeConsult"
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
                  name="intervencion"
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
                  name="timeIntervencion"
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
                  name="typeIntervencion"
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
                  name="duracionEVAT"
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
                  name="event"
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
                  name="typeEvent"
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
                  name="dateEvent"
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
                  name="timeEvent"
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
                  name="traslado"
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
                  name="datetraslado"
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
                  name="timetraslado"
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
                  name="estancia"
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
                  name="floor"
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
                  name="comment"
              />
              <TouchableOpacity
                  style={styles.btnSave}
                  onPress={handleSubmit(onSubmit)}
              >
                  <Text style={styles.textBtn}>Guardar</Text>
              </TouchableOpacity>
          </View>
      </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      shadowOpacity: 0.1,
      shadowRadius: 4,
      borderWidth:1,
      padding: '4%',
      elevation: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '85%',
      margin: '8%',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 6,
      },
  },
  inputRed: {
      width: '80%',
      height: 50,
      borderWidth: 1,
      margin: '1%',
      borderRadius: 4,
      textAlign: 'center',
      padding: 5,
      margin: '4%',
  },
  inputComment: {
      width: '80%',
      height: 130,
      borderWidth: 1,
      borderRadius: 4,
      margin: '4%',
      textAlign: 'center',
  },
  btnSave: {
      backgroundColor: '#ADE792',
      width: '80%',
      height: 45,
      borderRadius: 4,
      margin: '4%',
  },
  textBtn: {
      color: '#FFFFFF',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  },
})

export default RedEvat