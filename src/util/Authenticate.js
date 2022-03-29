import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function useAuthenticate(){
    const navigate = useNavigate();
    let isAuthenticated = window.sessionStorage.getItem("isAuthenticated")
    let policyHolderLocator = window.sessionStorage.getItem("policyHolderLocator")
    useEffect((e) => {
      if (isAuthenticated !== "yes" || policyHolderLocator === '') {
        navigate('/login');
      }
    }, [])
  
}
  