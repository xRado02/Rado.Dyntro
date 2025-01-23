import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-login',
  standalone: false,

  templateUrl: './section-login.component.html',
  styleUrl: './section-login.component.css'
})
export class SectionLoginComponent {

  constructor(private router: Router) { }

  
    goToDashboard() {
      this.router.navigateByUrl('/dashboard');
    }
 
  
}



