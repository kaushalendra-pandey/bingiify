import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>   
          <Route exact path="/signin" element={<Signin/>}/>   
      </Routes> 
    </Router>
  );
}

export default App;
