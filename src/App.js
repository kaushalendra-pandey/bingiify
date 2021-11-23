/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes"

function App() {
  const user = {name:'kaush'}
  return (
    <Router>
      <Routes>
          
          <Route 
            exact 
            path="//*" 
            element={
              <IsUserRedirect user={user} loggedInPath="/browse">
                <Home/>
              </IsUserRedirect>
            }
          />   
          <Route 
            exact 
            path="/signin" 
            element={
              <IsUserRedirect user={user} loggedInPath="/browse">
                <Signin/>
              </IsUserRedirect>
            } 
          />
          <Route 
            exact 
            path="/signup" 
            element={
              <IsUserRedirect user={user} loggedInPath="/browse">
                <Signup/>
              </IsUserRedirect>
            } 
          />

          <Route 
            exact 
            path="/browse" 
            element={
              <ProtectedRoute user={user} loggedInPath="/browse">
                <Browse/>
              </ProtectedRoute>
            } 
          />
      </Routes>
          
      
    </Router>
  );
}

export default App;
