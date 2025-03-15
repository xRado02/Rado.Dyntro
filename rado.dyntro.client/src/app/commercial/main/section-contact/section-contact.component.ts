import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';




@Component({
  selector: 'app-section-contact',
  standalone: false,

  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.css'
})

export class SectionContactComponent {
 
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastName: [''],
      establishment: ['', Validators.required],
      nipNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telNumber: [''],
      message: ['', Validators.required],
      politicy: [false, Validators.requiredTrue] // Walidacja checkboxa
    });
  }

 


  sendForm() {
    if (this.contactForm.invalid) {
      alert('Wypełnij poprawnie formularz!');
      return;
    }

    this.emailService.sendEmail(this.contactForm.value)
      .then(() => {
        alert('Wiadomość wysłana!');
        this.contactForm.reset();  // Reset formularza po wysłaniu
      })
      .catch((err) => {
        console.error('Błąd wysyłania', err);
        alert('Wystąpił błąd podczas wysyłania wiadomości!');
      });
  }

}

