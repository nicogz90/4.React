import { Button, StyleSheet, Text, View, Platform } from "react-native";

import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

async function askPermissions() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return false;
  }
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return true;
}

export default function Notify({ title, seconds }) {
  const scheduleNotification = async () => {
    // pedir permiso al usuario
    if (!(await askPermissions())) {
      alert("No tenemos permisos para enviar notificaciones");
      return;
    }

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Aviso para bus",
          body: "Ya está llegando el bus",
          data: { message: "Se te va el bus" }, // opcional
        },
        trigger: { seconds: seconds },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <Button title={title} onPress={scheduleNotification} />;
}

const styles = StyleSheet.create({});
