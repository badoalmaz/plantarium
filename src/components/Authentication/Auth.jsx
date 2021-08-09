import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import fire from "../../firebase/fire";
import HomePage from "../HomePage/HomePage";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("email");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };
  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

  // const handleLogIn = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };

  // const handleSignup = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };

  // const handleLogout = () => {
  //   fire.auth().signOut();
  // };

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <div className="Auth">
      {user ? (
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Auth;
