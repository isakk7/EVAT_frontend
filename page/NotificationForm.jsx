import { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    Button,
    Platform,
    TextInput,
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import axios from 'axios'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
})

async function registerForPushNotificationsAsync() {
    let token
    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!')
            return
        }
        token = (await Notifications.getExpoPushTokenAsync()).data
        console.log(token)
    } else {
        alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }
    return token
}

export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('')
    const [notification, setNotification] = useState(false)
    const notificationListener = useRef()
    const responseListener = useRef()
    const [text, onChangeText] = React.useState('')
    const [number, onChangeNumber] = React.useState('')

    useEffect(() => {
        registerForPushNotificationsAsync().then(token =>
            setExpoPushToken(token),
        )

        notificationListener.current =
            Notifications.addNotificationReceivedListener(notification => {
                setNotification(notification)
            })

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(response => {
                console.log(response)
            })

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current,
            )
            Notifications.removeNotificationSubscription(
                responseListener.current,
            )
        }
    }, [])

    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.input1}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Titulo"
                    keyboardType="text"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Descripción"
                    keyboardType="text"
                    multiline={true}
                    numberOfLines={10}
                />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    <Text>Your expo push token: {expoPushToken}</Text>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text>
                            Title:{' '}
                            {notification && notification.request.content.title}{' '}
                        </Text>
                        <Text>
                            Body:{' '}
                            {notification && notification.request.content.body}
                        </Text>
                    </View>
                    <TouchableHighlight
                        style={{
                            height: 40,
                            width: 240,
                            borderRadius: 10,
                            backgroundColor: 'green',
                            marginLeft: 50,
                            marginRight: 50,
                            marginTop: 20,
                            marginBottom: 40,
                        }}
                    >
                        <Button
                            title="Enviar Notificación"
                            color="white"
                            onPress={async () => {
                                try {
                                    await axios.post(
                                        process.env.API_BASE_URL +
                                            '/api/v1/notification/',
                                        {
                                            title: 'hola',
                                            description: 'hola',
                                            idPatient:
                                                '63a145eaa153becce4032053',
                                            idTransmitter:
                                                '63b1f362e650d1d3e3dfe5ae',
                                            idDoctor:
                                                '63b59a69775e132b0acec6e6',
                                        },
                                    )
                                } catch (error) {
                                    console.log(error.response.data.msg)
                                }
                            }}
                        />
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    input1: {
        height: 40,
        margin: 40,
        marginTop: 90,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 10,
    },
    input: {
        height: 130,
        width: '80%',
        margin: 40,
        marginTop: 1,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    ButtonText: {
        color: '#ffffff',
        borderRadius: 10,
    },
    buttonContainer: {
        backgroundColor: 'green',
        marginBottom: '25%',
        marginTop: '5%',
        margin: 40,

        paddingHorizontal: 50,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
        width: '80%',
    },
    container: {
        width: '85%',
        margin: '8%',
        marginTop: 100,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: '1%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
})
