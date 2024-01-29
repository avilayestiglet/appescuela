// http.interceptor.js

const requestInterceptor = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const requestInterceptorError = (error) => {
  // Maneja errores en la solicitud
  return Promise.reject(error);
};

const responseInterceptor = (response) => {
  // Personaliza o modifica la respuesta
  return response;
};

const responseInterceptorError = (error) => {
  // Maneja errores en la respuesta
  return Promise.reject(error);
};

const httpInterceptors = {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError
};

export default httpInterceptors;
