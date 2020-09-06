import React from "react";
import "./styles.css";
import { UserProvider } from "./context/user";
import { LoginForm } from "./components/LoginForm";
import { Greeting } from "./components/Greeting";

export default function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Super Awesome React App</h1>
        <LoginForm />
        <Greeting />
      </div>
    </UserProvider>
  );
}
