import configuration from "../config";
const BASE_URL = configuration.BASE_URL;

export const REGISTER_URL = BASE_URL + '/users';
export const LOGIN_URL = BASE_URL + '/users/auth';
export const LOGOUT_URL = BASE_URL + '/users/logout';
export const UPDATE_URL = BASE_URL + '/users/profile';