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

  newUser = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl(Role.Client, Validators.required)
  });

  public Role = Role;
  public RoleNames = UserRoleNames;
  public users: User[] = [];
  selectedUserIds: number[] = [];
  selectAllCheckbox: boolean = false;

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
        role: Number(this.newUser.value.role)
      };
      this.userService.addNewUser(createdUser).subscribe({
        next: (response) => {
          this.loadUsers();
          console.log("Załadowano użytkowników:", this.users);
        },
        error: (error) => {
          console.error("Błąd dodawania użytkownika", error);
        }
      });
    } else {
      console.log("Formularz jest niepoprawny!");
    }
  }

  deleteUsers(): void {
    this.userService.deleteUsers(this.selectedUserIds).subscribe({
      next: (response) => {
        console.log("Wybrani użytkownicy zostali usunięci");
        this.loadUsers();
      },
      error: (error) => {
        console.error("Błąd podczas usuwania użytkowników", error);
      }
    });
  }

  toogleSelection(userId: number, checked: boolean): void {
    if (checked) {
      this.selectedUserIds.push(userId);
    } else {
      this.selectedUserIds = this.selectedUserIds.filter(id => id !== userId);
    }
    this.updateSelectAllCheckboxState();
  }

  toogleSelectionAll(): void {
    this.selectAllCheckbox = !this.selectAllCheckbox;
    if (this.selectAllCheckbox) {
      this.selectedUserIds = this.users.map(user => user.id!).filter(id => id !== undefined) as number[];
    } else {
      this.selectedUserIds = [];
    }
  }

  isSelected(userId: number): boolean {
    return this.selectedUserIds.includes(userId);
  }

  getCheckboxChecked(event: Event): boolean {
    return (event.target as HTMLInputElement).checked;
  }

  updateSelectAllCheckboxState(): void {
    this.selectAllCheckbox = this.users.length > 0 && this.users.every(user => user.id !== undefined && this.selectedUserIds.includes(user.id));
  }
}
