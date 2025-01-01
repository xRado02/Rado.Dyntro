import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-clients',
  standalone: false,
  
  templateUrl: './section-clients.component.html',
  styleUrl: './section-clients.component.css'
})
export class SectionClientsComponent {

  constructor(private router: Router) { }

  goToPersonnelService() {
    this.router.navigate(['/client-personnel-service']);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  goToPragmaGo() {
    this.router.navigate(['/client-pragma-go']);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  goToArgentumEvent() {
    this.router.navigate(['/client-argentum-event']);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  goToVendorise() {
    this.router.navigate(['/client-vendorise']);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

 


  



}
