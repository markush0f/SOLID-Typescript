import { EmailNotification } from "./src/notifications/EmailNotificacion";
import { PushNotification } from "./src/notifications/PushNotifications";
import { TextMessageNotification } from "./src/notifications/TextMessageNotification";
import { NotificationService } from "./src/services/NotificationService";


const emailNotifier = new EmailNotification();
const textMessageNotifier = new TextMessageNotification();
const pushNotifier = new PushNotification();
const emailService = new NotificationService(emailNotifier);
const textMessageService = new NotificationService(textMessageNotifier);
const pushService = new NotificationService(pushNotifier);
emailService.notify("Hello, this is an email notification!");
textMessageService.notify("Hello, this is a text message notification!");
pushService.notify("Hello, this is a push notification!");

