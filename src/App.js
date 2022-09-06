import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from "./components/Login";
import Bookings from "./components/Bookings";




function App() {
  return (
   
  <div className="App">
    
     <Routes>
     <Route path="" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signup" element={<SignUp />} />
          </Routes>
        

    </div>
    
  );
}

export default App;

      
     
     

      