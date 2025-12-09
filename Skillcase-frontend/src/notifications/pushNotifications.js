import { PushNotifications } from "@capacitor/push-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Capacitor } from "@capacitor/core";

import api from "../api/axios.js";

export const initPushNotifications = async () => {
  if (!Capacitor.isNativePlatform()) return;

  const permission = await PushNotifications.requestPermissions();
  if (permission.receive !== "granted") return;

  // Also request local notification permission for foreground display
  await LocalNotifications.requestPermissions();

  await PushNotifications.register();

  PushNotifications.addListener("registration", async (token) => {
    console.log("Push token: ", token.value);
    await api.post("/user/save-fcm-token", { fcmToken: token.value });
  });

  // Show local notification when push received while app is open
  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.log("Notification received in foreground: ", notification);

    // Show as local notification so user sees it
    LocalNotifications.schedule({
      notifications: [
        {
          id: Date.now(),
          title: notification.title || "SkillCase",
          body: notification.body || "",
          schedule: { at: new Date(Date.now() + 100) }, // Show immediately
          smallIcon: "ic_launcher",
          iconColor: "#143A72",
        },
      ],
    });
  });

  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification) => {
      console.log("Notification tapped: ", notification);
    }
  );
};
