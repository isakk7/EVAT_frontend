import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Settings = () => {
    const navigation = useNavigation()

    return (
        <View>
            <ScrollView>
                <View
                    style={{
                        padding: 10,
                        width: '100%',
                        backgroundColor: '#000',
                        height: 150,
                    }}
                >
                    <TouchableOpacity>
                        <View></View>
                        <View></View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../assets/4.png')}
                        style={{
                            width: 140,
                            height: 140,
                            borderRadius: 100,
                            marginTop: -70,
                        }}
                    ></Image>
                </View>
                <View
                    style={{
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
                        marginTop: 80,
                    }}
                >
                    <Text>Maria Sanchez</Text>
                </View>
                <View
                    style={{
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
                    }}
                >
                    <Text>maria_sanchez@gmail.com</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonOut}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#fff',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            justifyContent: 'center',
                        }}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default Settings
