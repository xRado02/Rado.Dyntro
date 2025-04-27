import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../models/user/user-model';

@Component({
  selector: 'app-profile-details',
  standalone: false,
  
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent implements OnInit{

  public user: User = {
      firstName: null,
      lastName: null,
      email: null,
      role: null
  };
;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    this.userService.getAccountDetails().subscribe({
      next: (user) => {
        this.user = user;
      
      },
      error: (error) => {
        console.error('Błąd przy ładowaniu danych użytkownika:', error);
      }
    })
  }

}
