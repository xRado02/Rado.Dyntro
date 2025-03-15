import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceId = 'service_ex02tbt';
  private templateId = 'template_3f1jfqy';
  private publicKey = 'qBwIEwrInCjUOwU6L';

  constructor() { }

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.publicKey);
  }





}
