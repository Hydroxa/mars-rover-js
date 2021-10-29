import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Camera.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Camera(props) {
    const query = useQuery();
    const camera = query.get("camera");
    const rover = query.get("rover");

    function goToRovers() {
        props.history.push("/photos");
    }

    //fetch("/api/rovers/")
    const roverSol = 3000;
    return (
        <>
            <div id="controlPanel">
                <button className="backbutton" onClick={goToRovers}>
                    Back to Rovers
                </button>
                <div id="sliderContainer">
                    Sol<input type="range" min="2" max={roverSol} className="slider" id="sol"></input>
                </div>
            </div>
        </>
    );
}
