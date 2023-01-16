import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
//Screens
import NursePage from "../page/NursePage";
import Home from "../page/Home";
import Settings from "../page/Settings";
import PatientRegister from "../page/PatientRegisterPage";
import RedEvat from "../page/RedEvat";
import LoginPage from "../page/LoginPage";

const Stack = createNativeStackNavigator();
function StackNavigate() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "black",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PatientRegister"
        component={PatientRegister}
        options={{
          tabBarLabel: "Registro Empleados",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="form-select"
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
          tabBarLabel: "Red Evat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-cog"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
