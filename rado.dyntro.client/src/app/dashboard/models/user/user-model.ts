import { Role } from '../../Enums/UserEnums';

export interface User {
  id: number; 
  firstName: string;
  lastName: string;
  email: string;
  role: Role
}
