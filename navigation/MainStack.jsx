import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
//Screens
import Home from "../page/Home";
import Settings from "../page/Settings";
import RedEvat from "../page/RedEvat";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 40 }}
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#3CCF4E",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
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
          tabBarLabel: "Red Evat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-edit-outline"
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
          tabBarLabel: "Settings",
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
  );
};
export default MyTabs;
