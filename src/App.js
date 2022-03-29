import React from "react";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Login from "./pages/login/Login"
import FullAppContextProvider from "./context/FullAppContext";
import CustomizedSnackbar from "./pages/common/CustomizedSnackbar";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        <CustomizedSnackbar></CustomizedSnackbar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <FullAppContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
           
          </Routes>
        </FullAppContextProvider>
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
