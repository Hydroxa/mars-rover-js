import React, { Component, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function ProtectedRoute( {
    isAuth: isAuth,
    component: Component,
    ...rest
} ) {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuth) {
                    return (
                    <>
                        <NavigationBar></NavigationBar>
                        <Component {...props} />;
                    </>
                    );
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    );
}
