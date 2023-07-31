import { loginRequestDTO, registerRequestDTO, updateRequestDTO } from "../models";
import { AuthService } from "../services/authservices";

export class Authentication {
  token: string | undefined;

  error: string = "";

  register = async (request: registerRequestDTO) => {
    this.error = "";

    request.email = request.email?.trim();
    const response = await AuthService.register(request);
    console.log('response in authstore', response);
    
    if (!response.success && response.message) {
      this.error = response.message || '';
    }
    return response;
  };

  update = async (request: updateRequestDTO) => {
    this.error = "";

    request.email = request.email?.trim();
    const response = await AuthService.update(request);
    console.log('response in authstore', response);
    
    if (!response.success && response.message) {
      this.error = response.message || '';
    }
    return response;
  };

  login = async (request: loginRequestDTO) => {
    this.error = "";

    request.email = request.email?.trim();
    const response = await AuthService.login(request);
    console.log('response in authstore', response);
    
    if (!response.success && response.message) {
      this.error = response.message || '';
    }
    return response;
  };

  logout = async () => {
    this.error = "";

    const response = await AuthService.logout();
    console.log('response in authstore', response);
    
    if (!response.success && response.message) {
      this.error = response.message || '';
    }
    return response;
  };

}

export const AuthenticationStore = new Authentication();
