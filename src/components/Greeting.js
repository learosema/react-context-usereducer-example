import React from "react";
import { useUser } from "../context/user";

export const Greeting = () => {
  const { state } = useUser();
  return (
    <div>
      {state.userName
        ? "Welcome, " + state.userName
        : "You are currently not logged in"}
    </div>
  );
};
