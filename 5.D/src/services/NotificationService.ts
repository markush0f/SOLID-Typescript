import { INotificationSender } from "../interfaces/NotificationSender.interface";

export class NotificationService {
    private readonly sender: INotificationSender;
    constructor(sender: INotificationSender) {
        this.sender = sender;
    }
    notify(message: string): void {
        this.sender.sendNotification(message);
    }
}