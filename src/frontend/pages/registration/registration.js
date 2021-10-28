import { useState } from "react";
import RegisterForm from "../../Components/RegisterForm";
import Header from "../../Components/Header";
import { response } from "express";

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
    .then((response)=>{
      console.log(response.status)
      if(response.status===201){
        window.alert("Registration successfull \ngo to localhost:3000/login to login. :) \n", response.status)
      }
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
