import apiService from "../../../compartido/services/apiServices";

const loginApiService = {
  login: ({ email, password }) =>
    apiService.post({
      path: "/login",
      data: { email, password },
    }),
  register: ({ name, lastname, email, password, role }) =>
    apiService.post({
      path: "/register",
      data: {
        name,
        lastname,
        email,
        password,
        role,
      },
    }),
};

export default loginApiService;
