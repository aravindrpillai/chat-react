import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ContextObject } from "../../context/ContextProvider";

export function useLogin(props) {
   
    const navigate = useNavigate();
    const {setSnackBarData} = useContext(ContextObject); 
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = ({ email, password }) => {
        window.sessionStorage.setItem("policyHolderLocator", 'be34ebe7-3719-4503-9104-2978e3eabdcf');
        window.sessionStorage.setItem("isAuthenticated", "yes");
        //setSnackBarData({ open :true, severity:"success", message:"Login successfully."})
        navigate('/home');
    };
    return {
        handleSubmit: handleSubmit(onSubmit),
        register,
        errors
    };
}

