export interface IRegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  rePassword: string;
}


export interface ILoginData {
  email: string;
  password: string;
}


