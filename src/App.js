import React from "react";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import FullAppContextProvider from "./context/FullAppContext";
import CustomizedSnackbar from "./pages/common/CustomizedSnackbar";
import Chat from "./pages/chat/Chat";
import UserRegistrationForm from "./pages/registration/UserRegisterationForm";
import LoginForm from "./pages/login/LoginForm";
import QuickChat from "./pages/quickchat/Chat";

function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        <CustomizedSnackbar></CustomizedSnackbar>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<UserRegistrationForm />} />
        <Route path="/quickchat" element={<QuickChat />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
        <FullAppContextProvider>
          <Routes>
            <Route path="/" element={<LoginForm />} />
           
          </Routes>
        </FullAppContextProvider>
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
