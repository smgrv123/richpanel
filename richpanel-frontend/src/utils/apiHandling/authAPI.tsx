import axios from "axios";
import { Navigate } from "react-router-dom";

import { login, signup } from "../interface/authInterface";
import { API_URL } from "../../commons/constants";
import mobxStore from "../../store/mobxStore";

const signUpUser = async (signUpData: signup, navigate: any) => {
  axios
    .post(`${API_URL}/user/signup`, signUpData)
    .then((res) => {
      console.log(res);
      if (res?.data?.Email) {
        navigate("/login");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginUser = (loginData: login, navigate: any) => {
  axios
    .post(`${API_URL}/user/login`, loginData)
    .then((res) => {
      console.log(res.data.result);
      mobxStore.setUserSuccesssfullyLoggedIn(res.data.result);
      if (res.data.result) {
        navigate("/plans");
        console.log("first");
        return <Navigate to="plans" />;
      } else {
        alert("Incorrect Username and Password");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { signUpUser, loginUser };
