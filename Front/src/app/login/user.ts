import {UserRole} from "./UserRole";

export class User{
  idKlienta!:number;
  dane!:string;
  email!:string;
  login!:string;
  haslo!:string;
  adres!:string;
  data_zalozenia!:string;
  nazwiskoMatka!:string;
  numerTel!:number;
}
export interface UserLoginCredentials{
  login:string;
  haslo:string;
  userRole:UserRole;
}
