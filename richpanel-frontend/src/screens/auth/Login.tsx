import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import Button from "../../components/auth/Button";
import TextInput from "../../components/auth/TextInput";
import "../../styles/authStyles.css";
import { loginUser } from "../../utils/apiHandling/authAPI";
import { login } from "../../utils/interface/authInterface";

function Login() {
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");

  let navigate = useNavigate();

  // const renderAlert = () => {
  //   console.log('first')
  //   return (
  //     <Alert status="error">
  //       <AlertIcon />
  //       <AlertTitle>Login Denied</AlertTitle>
  //       <AlertDescription>Incorrect Username and Password</AlertDescription>
  //     </Alert>
  //   );
  // };

  return (
    <div className="auth-parent">
      <div className="auth-container">
        <div className="auth-heading">Login To Your Account</div>
        <div className="auth-input-container">
          <div>
            <TextInput
              placeholder="john_doe@gmail.com"
              type="email"
              heading="E-Mail"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setemail(e.target.value);
              }}
              value={email}
            />
            <TextInput
              placeholder="Password"
              type="password"
              heading="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setpass(e.target.value);
              }}
              value={pass}
            />
          </div>
          <div>
            <Button
              placeholder="Login"
              LoginFunction={() => {
                const logindata: login = {
                  Email: email,
                  Password: pass,
                }
                loginUser(logindata, navigate);
                
              }}
            />
            <p>
              Don't have an account?{" "}
              <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
