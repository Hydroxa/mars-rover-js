import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Photos from "./Photos/Photos";
import registrationPage from "./registration/registration";
import "./css/cssreset.css";
import "./css/App.css";
import "./css/Utilities.css";
import "./css/Header.css";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/registration" component={registrationPage} />
    </Switch>
  );
}
