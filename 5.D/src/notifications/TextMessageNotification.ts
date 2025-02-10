import { INotificationSender } from "../interfaces/NotificationSender.interface";

export class TextMessageNotification implements INotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending text message notification: ${message}`);
    }
}