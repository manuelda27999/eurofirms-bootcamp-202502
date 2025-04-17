import { useState } from "react";

import { Landing } from "./view/Landing";
import { Home } from "./view/Home";
import { Register } from "./view/Register";
import { Login } from "./view/Login";

export const App = () => {
  const [view, setView] = useState("landing");

  const handleChangeToRegister = () => setView("register");
  const handleChangeToLogin = () => setView("login");
  const handleChangeToHome = () => setView("home");
  const handleChangeToLanding = () => setView("landing");

  console.log("App -> render");

  return (
    <>
      {view === "landing" && (
        //Landing view
        <Landing
          onRegisterClicked={handleChangeToRegister}
          onLoginClicked={handleChangeToLogin}
        />
      )}

      {view === "register" && (
        //Register view
        <Register
          onLoginClicked={handleChangeToLogin}
          onUserRegistered={handleChangeToLogin}
        />
      )}

      {view === "login" && (
        //Login view
        <Login
          onRegisterClicked={handleChangeToRegister}
          onUserLoggedIn={handleChangeToHome}
        />
      )}

      {view === "home" && ( //Home View
        <Home onUserLoggedOut={handleChangeToLanding} />
      )}
    </>
  );
};
