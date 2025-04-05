import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { Role, UserRoleNames } from '../../../Enums/UserEnums';
import { User } from '../../../models/user/user-model';

@Component({
  selector: 'admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {

  @ViewChild('addUserModal') addUserModal!: ElementRef; 

  newUser = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl(Role.Client, Validators.required)
  });

  public Role = Role;
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

  createNewUser(): void {
    if (this.newUser.valid) {     
      const createdUser: Partial<User> = {
        firstName: this.newUser.value.firstName,
        lastName: this.newUser.value.lastName,
        email: this.newUser.value.email,
        role: this.newUser.value.role
      };
      createdUser.role = Number(createdUser.role);
       this.userService.addNewUser(createdUser).subscribe({
        next: (response) => {        
          this.loadUsers();         
         
        },
        error: (error) => {
          console.error("Błąd dodawania użytkownika", error);
        }
      });
    } else {
      console.log("Formularz jest niepoprawny!");
    }
  }
}
