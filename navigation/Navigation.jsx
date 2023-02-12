import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyTabs from "../navigation/MainStack";
import LoginPage from "../page/LoginPage";
import DailyForm from "../page/DailyForm";
import Notifications from "../page/NotificationForm";
import PatientInformation from "../page/PatientInformation";
import DoctorsCardsNotification from "../page/DoctorsCardsNotification";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DailyForm" component={DailyForm} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="PatientInformation"
          component={PatientInformation}
        />
        <Stack.Screen
          name="DoctorsCards"
          component={DoctorsCardsNotification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
