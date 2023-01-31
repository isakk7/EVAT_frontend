import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyTabs from '../navigation/MainStack'
import LoginPage from '../page/LoginPage'
import Home from '../page/Home'
import DailyForm from '../page/DailyForm'
import Notifications from '../page/NotificationForm'
import PatientInformation from '../page/PatientInformation'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false, title: 'Sing in' }}
                />
                <Stack.Screen
                    name="Home"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="DailyForm" 
                    component={DailyForm} 
                />
                <Stack.Screen 
                    name="Notifications" 
                    component={Notifications} 
                />
                <Stack.Screen 
                    name="PatientInformation"
                    component={PatientInformation} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
