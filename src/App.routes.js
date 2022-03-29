import React from 'react';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import PersonalInformationForm from './pages/personalinformationform/PersonalInfomationForm';
import { BrowserRouter as Router, Navigate , Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated]= useState(false)
  let router= (
   <Router>
   <Routes>
      <Route path="/" element={<Login handleClick={setIsAuthenticated}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </Router>)
   if(isAuthenticated){
    router= (
      <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/personalinformationform" element={<PersonalInformationForm/>}/>
      </Routes>
       </Router>
    )
  }
  return (

  <div>
    {router}
  </div>
  );
}

export default AppRoutes;




