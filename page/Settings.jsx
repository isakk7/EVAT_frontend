import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity
        style={styles.buttonOut}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOut: {
    with: "80%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Settings;
