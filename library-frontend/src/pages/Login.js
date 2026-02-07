import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { signupUser } from "../services/authService";
import Signup from "./Signup";
function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  // return (
  //   <div className="container mt-5">
  //     <h2>Login</h2>
  //     <button className="btn btn-success" onClick={login}>
  //       Login
  //     </button>
  //   </div>
  // );
  return (
  <div className="login-page">
    <div className="login-card">
      <h2>Login</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Username"
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />

      <button className="btn btn-success login-btn w-100" onClick={login}>
        Login
      </button>

      <div className="login-footer">
        Don’t have an account? <button className="btn btn-success signup-btn w-100"onClick={() => navigate("/signup")}>Signup</button>
      </div>
    </div>
  </div>
);

}

export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/authService";
// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     try {
//       const response = await loginUser({
//         username: username,
//         password: password,
//       });

//       // save token
//       localStorage.setItem("token", response.data.token);

//       // redirect
//       navigate("/dashboard");
//     } catch (error) {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={login}>Login</button>
//     </>
//   );
// }

// export default Login;
