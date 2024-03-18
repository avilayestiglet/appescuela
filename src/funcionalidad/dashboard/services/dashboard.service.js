import apiService from "../../../compartido/services/apiServices";

const dashboardApiService = {
    getTeachers: (params = {}) => apiService.get("/profesor", params),
    getBinnacle: (params = {}) => apiService.get("/bitacora", params),
    getStudents: (body = {}) => apiService.get("/alumnos"),
    getUser: (params = {}) => apiService.get("/user", params),
    createTeacher: (body = {}) => apiService.post("/create-teacher", body)
};

export default dashboardApiService;