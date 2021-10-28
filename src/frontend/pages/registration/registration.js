import { useState } from "react";
import RegisterForm from "../../Components/RegisterForm";
import Header from "../../Components/Header";

const Login = (properties) => {

  const handleRegistration = (details) => {

    const regDetails = {
      name: details.name,
      email: details.email,
      username: details.username,
      password: details.password,
    };

    fetch("/api/registration", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(regDetails),
    })
  };

  return (
    <>
      <title>Mars Rover App - Registration</title>
      <Header />
      <main className="page-container--normal">
        <div className="login-form">
          <div>
            <RegisterForm
              registration={handleRegistration}
            />
          </div>
          <div className="login-hero-section"></div>
        </div>
      </main>
    </>
  );
};

export default Login;
