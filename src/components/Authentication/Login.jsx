import { makeStyles } from "@material-ui/core";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  authButton: {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "15px 0",
    color: "#fff",
    fontSize: "16px",
    letterSpacing: "1px",
    background: "rgba(131, 209, 132, 1)",
    cursor: "pointer",
  },
  login: {
    width: "100%",
    minHeight: "100vh",
    padding: "0 20px",
    background: "#e9e9e9",
    display: "flex",
  },
  loginContainer: {
    padding: "60px",
    margin: "auto",
    width: "100%",
    maxWidth: "520px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background:
      "radial-gradient(ellipse at left bottom, rgba(10, 80, 46, 1) 0%, rgba(28, 148, 90, 1) 59%,rgba(4, 89, 48, 1)100%)",
    boxShadow: "0 50px 70px -20px rgba(0, 0, 0, 0.8)",
  },
  authLabel: {
    color: "white",
    margin: "14px 0",
    display: "block",
    fontSize: "22px",
    lineHeight: "1",
  },
  authInput: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "19px",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    letterSpacing: "1px",
  },
  btnContainer: {
    width: "100%",
    padding: "24px 0",
  },
  authP: {
    margin: "14px 0 0 0",
    textAlign: "right",
    color: "#fff",
    cursor: "pointer",
  },
  authSpan: {
    color: "yellow",
    fontWeight: "500",
    letterSpacing: "0.5px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
  },
  authSpan: {
    "&:hover": {
      color: "red",
    },
  },
  errorMsg: {
    color: "red",
    fontSize: "16px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
  } = useAuth();

  return (
    <>
      <section className={classes.login}>
        <div className={classes.loginContainer}>
          <label className={classes.authLabel}>Username</label>
          <input
            className={classes.authInput}
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className={classes.errorMsg}>{emailError}</p>
          <label className={classes.authLabel}>Password</label>
          <input
            className={classes.authInput}
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={classes.errorMsg}>{passwordError}</p>
          <div className={classes.btnContainer}>
            {hasAccount ? (
              <>
                <button className={classes.authButton} onClick={handleLogIn}>
                  Sign in
                </button>
                <p className={classes.authP}>
                  Don't have an account ?
                  <span
                    className={classes.authSpan}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className={classes.authButton} onClick={handleSignup}>
                  Sign up
                </button>
                <p className={classes.authP}>
                  Have an account ?
                  <span
                    className={classes.authSpan}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
