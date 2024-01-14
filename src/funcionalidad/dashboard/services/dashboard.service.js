import apiService from "../../../compartido/services/apiServices";

const dashboardApiService = {
    getTeachers: (body = {}) => apiService.get("/profesor"),
    getStudents: (body = {}) => apiService.get("/alumnos"),
    getUser: (body = {}) => apiService.post("/user", body),
};

export default dashboardApiService;