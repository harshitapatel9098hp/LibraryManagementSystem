// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "../services/authService";
// import "./Signup.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const signup = async () => {
//     try {
//       await signupUser({
//         username: username,
//         password: password,
//       });

//       alert("Signup successful");
//       navigate("/login");
//     } catch (error) {
//       alert("Signup failed");
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

//       <button onClick={signup}>Signup</button>
//     </>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await signupUser({
        username: username,
        password: password,
      });

      alert("Signup successful");
      navigate("/login");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-btn w-100" onClick={signup}>
          Sign Up
        </button>
        
Already have an account?{" "}
        <div className="btn btn-success signup-btn w-100">
          
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
