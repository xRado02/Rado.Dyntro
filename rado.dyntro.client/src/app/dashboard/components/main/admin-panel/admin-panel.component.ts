import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { UserRoleNames } from '../../../Enums/UserEnums';
import { User } from '../../../models/user/user-model';

@Component({
  selector: 'admin-panel',
  standalone: false,
  
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit{

  newUser = new FormGroup({    
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('client')
  });

  public RoleNames = UserRoleNames;

  public users: User[] = [];
  constructor(private userService: UserService) { }

 
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  //addUser() {
 
  //  const newUser: User = this.newUser.value;    
  //  this.userService.createNewUser(newUser).subscribe({
  //    next: (user) => {       
  //      this.users.push(user);  
  //      console.log('Dodano nowego użytkownika:', user);
  //    },
  //    error: (err) => {
  //      console.error('Błąd przy dodawaniu użytkownika:', err);
  //    }
  //  });
  //}

}
