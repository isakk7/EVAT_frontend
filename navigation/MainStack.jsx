import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
//Screens
import Home from '../page/Home'
import Settings from '../page/Settings'
import RedEvat from '../page/RedEvat'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: 'black',
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home-circle-outline"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Red Evat"
                component={RedEvat}
                options={{
                    tabBarLabel: 'Red Evat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-cog"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default MyTabs
