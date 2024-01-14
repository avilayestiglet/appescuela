// apiService.js

import axios from 'axios';
import { from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import httpInterceptors from './http.interceptor';


// Crea una instancia de Axios
const axiosInstance = axios.create();

// base url
const base = "http://localhost:5000";

// Añade los interceptores a la instancia de Axios
axiosInstance.interceptors.request.use(
  httpInterceptors.requestInterceptor,
  httpInterceptors.requestInterceptorError
);

axiosInstance.interceptors.response.use(
  httpInterceptors.responseInterceptor,
  httpInterceptors.responseInterceptorError
);

const apiService = {
  get: (path) => {
    return from(axiosInstance.get(`${base}${path}`)).pipe(
      map(response => response.data),
      catchError(error => { 
        if(error.status == 0){
          return {
            error: "Error al conectar al servidor",
            status: error.status
          }
        }
        if(error.response != null && error.response != undefined){
          return of(error.response.data);
        }
        return of({
          error: error.message,
          status: error.status
        })
      })
    );
  },
  post: (path, data) => {
    return from(axiosInstance.post(`${base}${path}`, data)).pipe(
      map(response => response.data),
      catchError(error => { 
        console.log(error)
        if(error.status == 0){
          return {
            error: "Error al conectar al servidor",
            status: error.status
          }
        }
        if(error.response != null && error.response != undefined){
          return of(error.response.data);
        }
        return of({
          error: error.message,
          status: error.status
        })
      })
    );
  },

  // Puedes seguir añadiendo métodos como put, delete, etc.
};

export default apiService;