import { loginRequestDTO, loginResponseDTO, logoutResponseDTO, registerRequestDTO, registerResponseDTO, updateRequestDTO } from "../models";
import { ApiService } from "./apiServices";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL, UPDATE_URL } from './endpoints';

export class AuthService {

    static register = async (request: registerRequestDTO) => {
        const response = await ApiService.post<registerRequestDTO, registerResponseDTO>(REGISTER_URL, request);
        console.log('response in authservice', response);

        return response;
    }

    static update = async (request: updateRequestDTO) => {
        const response = await ApiService.put<updateRequestDTO, registerResponseDTO>(UPDATE_URL, request);
        console.log('response in authservice', response);

        return response;
    }

    static login = async (request: loginRequestDTO) => {
        const response = await ApiService.post<loginRequestDTO, loginResponseDTO>(LOGIN_URL, request);
        console.log('response in authservice', response);
        
        return response;
    }

    static logout = async () => {
        const response = await ApiService.post<undefined, logoutResponseDTO>(LOGOUT_URL);
        console.log('response in authservice', response);
        
        return response;
    }
} 
