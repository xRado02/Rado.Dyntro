import { Role } from '../../Enums/UserEnums';

export interface User {
  id?: number;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: Role | null;  
}


