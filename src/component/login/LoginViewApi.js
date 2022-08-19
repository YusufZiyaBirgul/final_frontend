import axios from "axios";
export class LoginViewApi {

  getLogin() {
    return axios.get("/login");
  }
}