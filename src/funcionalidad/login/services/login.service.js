import apiService from "../../../compartido/services/apiServices";

const loginApiService = {
    login: ({email, password}) => apiService.post("/login", { email, password }),
    register: ({email, password, tipo_usuario = 'usuario'}) => apiService.post("/register", { email, password, tipo_usuario })
};

export default loginApiService;