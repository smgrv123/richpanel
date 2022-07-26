import axios from "axios";
import { login, signup } from "../interface/authInterface";

const API_URL = "http://localhost:5000";

const signUpUser = async (signUpData: signup) => {
  axios
    .post(`${API_URL}/user/signup`, signUpData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginUser = (loginData: login) => {
  axios
    .post(`${API_URL}/user/login`, loginData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { signUpUser, loginUser };