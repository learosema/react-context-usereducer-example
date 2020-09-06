import React, { createContext, useReducer, useMemo, useContext } from "react";

const UserContext = createContext();

const initialState = {
  userName: null
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      console.log("loggin in", action.payload);
      return { ...state, userName: action.payload };
    }
    case "RESET": {
      return { ...state, userName: null };
    }
    default:
      return state;
  }
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  return useContext(UserContext);
};
