import { LoginService } from '../services/services';
import { LoginModel } from '../types/types.model';

export class LoginUseCase {
  async execute({ email, password }: LoginModel) {
    const loginRepository = new LoginService();
    const response = await loginRepository.login({ email, password });
    return response;
  }
}
