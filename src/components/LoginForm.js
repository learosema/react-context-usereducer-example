import React, { useRef, useState } from "react";
import { useUser } from "../context/user";

import "./LoginForm.css";

export const LoginForm = () => {
  const formRef = useRef(null);
  const [inputUser, setInputUser] = useState("");
  const [inputPswd, setInputPswd] = useState("");
  const { state, dispatch } = useUser();
  const { userName } = state;
  const loginOrOut = (e) => {
    e.preventDefault();

    if (userName) {
      dispatch({ type: "RESET" });
    } else {
      dispatch({ type: "SET_USER", payload: inputUser });
    }
    setInputUser("");
    setInputPswd("");
  };

  return (
    <form ref={formRef} onSubmit={loginOrOut}>
      {userName ? (
        <div className="form">
          Logged in as {userName}
          <button type="submit"> Logout </button>
        </div>
      ) : (
        <div className="form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={inputUser}
            required
            onChange={(e) => setInputUser(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputPswd}
            required
            onChange={(e) => setInputPswd(e.target.value)}
          />
          <button type="submit"> Login </button>
        </div>
      )}
    </form>
  );
};
