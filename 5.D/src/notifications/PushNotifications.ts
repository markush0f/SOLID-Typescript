import { INotificationSender } from "../interfaces/NotificationSender.interface";

export class PushNotification implements INotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}