import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Text,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import { object } from 'prop-types'
import useFetch from '../hooks/useFetch'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const propTypes = {
    navigation: object,
}

const LoginPage = ({ navigation }) => {
    const { control, handleSubmit } = useForm()
    const { loginRequest } = useFetch()
    const onSubmit = async data => {
        try {
            await loginRequest(data)
            navigation.navigate('Home')
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/1.jpg')}
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
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.ButtonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        width: '80%',
        borderWidth: 2,
        padding: 15,
        margin: 10,
        borderRadius: 8,
    },

    image: {
        width: '40%',
        height: '35%',
        borderRadius: 40,
        marginBottom: '5%',
    },
    container: {
        justifyContent: 'center',
        margin: 'auto',
        alignItems: 'center',
        marginTop: '45%',
    },
    buttonContainer: {
        backgroundColor: 'green',
        marginBottom: '25%',
        marginTop: '5%',
        paddingHorizontal: 50,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
        width: '80%',
    },
    ButtonText: {
        color: '#ffffff',
        borderRadius: 10,
    },
})

LoginPage.propTypes = propTypes
export default LoginPage
