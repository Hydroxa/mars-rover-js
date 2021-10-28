import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import "./cssreset.css";
import "./App.css";
import Photos from "./Photos/Photos";
import registerationPage from "./registration/registration";
export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/registration" component={registerationPage}/>
        </Switch>
    );
}
