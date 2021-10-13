import axios from "axios";

const API_URL = "http://localhost:3030/api/users/";

class AuthService {

  login({email, password}) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(res => {
        if (res.data.csrfToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }

        return res.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register({email, password}) {
    
    return axios.post(API_URL + "register", {
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();