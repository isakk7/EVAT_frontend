import React from 'react'
import NavigationSatck from './navigation/MainStack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation/Navigation'
import UserProvider from './context/useContext'

export default function App() {
    return (
        <UserProvider>
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
        </UserProvider>
    )
}

