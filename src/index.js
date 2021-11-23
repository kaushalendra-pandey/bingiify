import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line no-unused-vars
import {firebase}  from './lib/firebase.prod.js';
import {GlobalStyles} from "./global-styles"
import "normalize.css"
import {FirebaseContext} from "../src/context/firebase"


ReactDOM.render(
   <>
      <FirebaseContext.Provider value={{firebase}}>
         <GlobalStyles/>
         <App />
      </FirebaseContext.Provider>
      
   
   </> , document.getElementById('root')
);

