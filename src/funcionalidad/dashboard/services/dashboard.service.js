import apiService from "../../../compartido/services/apiServices";

const dashboardApiService = {
    getTeachers: (params = {}) => apiService.get("/profesor", params),
    getBinnacle: (params = {}) => apiService.get("/bitacora", params),
    getStudents: (body = {}) => apiService.get("/alumnos"),
    getUser: (body = {}) => apiService.post("/user", body),
};

export default dashboardApiService;