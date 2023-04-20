import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (
  username: string,
  email: string,
  password: string,
  ownerID: string
) => {
  return await axios.post(API_URL + "signup", {
    username,
    email,
    password,
    ownerID,
  });
};

const login = async (email: string, password: string) => {
  return await axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string);
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
