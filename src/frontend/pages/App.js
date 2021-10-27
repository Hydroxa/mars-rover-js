import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import "./cssreset.css";
import "./App.css";
import Photos from "./Photos/Photos";
import Quiz from "./quiz/Quiz";
import ProtectedRoute from "../Components/ProtectedRoute";
import { useState } from "react";

export default function App() {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={Photos} />
            <ProtectedRoute exact path="/quiz" component={Quiz} isAuth={isAuth} />
        </Switch>
    );
}
