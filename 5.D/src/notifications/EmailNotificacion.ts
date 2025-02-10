import { INotificationSender } from "../interfaces/NotificationSender.interface";


export class EmailNotification implements INotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}