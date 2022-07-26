import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/auth/Button";
import TextInput from "../../components/auth/TextInput";
import "../../styles/authStyles.css";
import { signup } from "../../utils/interface/authInterface";
import { signUpUser } from "../../utils/apiHandling/authAPI";

function SignUp() {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");

  let navigate = useNavigate();

  return (
    <div className="auth-parent">
      <div className="auth-container">
        <div className="auth-heading">Login To Your Account</div>
        <div className="auth-input-container">
          <div>
            <TextInput
              placeholder="John Doe"
              type="text"
              heading="Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setname(e.target.value);
              }}
              value={name}
            />
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
                const signupdata: signup = {
                  Name: name,
                  Email: email,
                  Password: pass,
                }
                signUpUser(signupdata)
              }}
            />
            <p>
              Already have an account?{" "}
              <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  navigate("/login");
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

export default SignUp;

