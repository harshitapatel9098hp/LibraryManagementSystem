// // function App() {
// //   return (
// //     <div>
// //       <h1 style={{ color: 'red', fontSize: '40px' }}>
// //         APP.JS WORKING 🔥🔥🔥
// //       </h1>
// //     </div>
// //   );
// // }

// // export default App;


// import logo from './logo.svg';
// import './App.css';
// import { Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';

// function App() {

  
//   return (
//     <div>
//       <Dashboard />
//     </div>
    
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//     // console.log("App.js is working")
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
