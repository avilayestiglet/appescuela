import apiService from "../../../compartido/services/apiServices";

const loginApiService = {
    login: ({email, password}) => apiService.post("/login", { email, password })
};

export default loginApiService;