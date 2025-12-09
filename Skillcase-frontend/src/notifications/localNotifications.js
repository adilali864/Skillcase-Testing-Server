import { LocalNotifications } from "@capacitor/local-notifications";
import { Capacitor } from "@capacitor/core";

export const scheduleStreakReminder = async () => {
  if (!Capacitor.isNativePlatform()) return;

  const permission = await LocalNotifications.requestPermissions();
  if (permission.display !== "granted") return;

  await LocalNotifications.cancel({ notifications: [{ id: 1 }] });

  await LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "Keep Your Streak Alive!",
        body: "Dont break your learning streak! Practice for just 5 minutes today.",
        schedule: {
          at: new Date(Date.now() + 30 * 1000), //24 hours,
          allowWhileIdle: true,
        },
        smallIcon: "ic_launcher",
        iconColor: "#143A72",
      },
    ],
  });
};

export const resetStreakReminder = async () => {
  //this keeps resetting the reminder if the user is using the app
  await scheduleStreakReminder();
};
