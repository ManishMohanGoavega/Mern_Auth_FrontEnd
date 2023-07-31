import axios from 'axios';

axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error?.response?.status === 400 || error?.response?.status === 401) {
        return { data: { success: false, message: error.response.data.message } }
      }
      return Promise.reject(error)
    }
  )

export class ApiService {

    public static async post<Req, Res>(url: string, body?: Req) {
        const response = await axios.post<Res>(url, body, {headers:{"Content-Type" : "application/json"}, withCredentials: true});
        return response?.data;
    }

    public static async put<Req, Res>(url: string, body?: Req) {
      const response = await axios.put<Res>(url, body, {headers:{"Content-Type" : "application/json"}, withCredentials: true});
      return response?.data;
  }
}
