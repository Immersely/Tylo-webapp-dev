import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Features from "./components/features/features";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('App component rendering');
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<About />}></Route>
          <Route exact path="/features" element={<Features />}></Route>
          {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
