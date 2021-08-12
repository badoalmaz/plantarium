import React, { createContext, useContext, useEffect, useState } from "react";

import fire from "../../src/firebase/fire";

export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    user,
    handleLogout,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  };

  return (
    // <div className="Auth">
    //   {user ? (
    //     <BrowserRouter>
    //       <HomePage handleLogout={handleLogout} />
    //     </BrowserRouter>
    //   ) : (
    //     <Login
    //       email={email}
    //       setEmail={setEmail}
    //       password={password}
    //       setPassword={setPassword}
    //       handleLogIn={handleLogIn}
    //       handleSignup={handleSignup}
    //       hasAccount={hasAccount}
    //       setHasAccount={setHasAccount}
    //       emailError={emailError}
    //       passwordError={passwordError}
    //     />
    //   )}
    // </div>
    <authContext.Provider value={values}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
