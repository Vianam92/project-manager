import axios from 'axios';
import { LoginModel, RegisterModel } from '../types/types.model';

export class LoginService {
  async login({ email, password }: LoginModel) {
    const response = await axios.post('https: localhost:5000/login', {
      email,
      password,
    });

    if (response.status) {
      console.log(response);
    }
  }
}

export class RegisterService {
  async Register({ name, email, password }: RegisterModel) {
    const response = await axios.post('https:localhost:5000/register', {
      name,
      email,
      password,
    });

    if (response.status) {
      console.log(response);
    }
  }
}
