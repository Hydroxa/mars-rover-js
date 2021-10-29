import React, { useEffect, useState } from "react";
import "./Photos.css";

export default function Photos(props) {
    function goToCameras(camera, rover) {
        props.history.push(`/photos/camera?camera=${camera}&rover=${rover}`);
    }

    return (
        <>
            <div className="main-wrapper">
                {/* ROW 1 */}
                <div className="row">
                    <div className="box box--accent"></div>

                    <div className="box box--trans-black">
                        <h1>Curiosity</h1>
                        <h2>The Curiosity rover landed inside the Gale Crater on 6th August 2012. It was built as a part of NASA's Mars Science Laboratory (MSL) mission.</h2>
                        <ul className="cameraList">
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("FHAZ", "curiosity")}>
                                    FHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("RHAZ", "curiosity")}>
                                    RHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("NAVCAM", "curiosity")}>
                                    NAVCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MAST", "curiosity")}>
                                    MAST
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("CHEMCAM", "curiosity")}>
                                    CHEMCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MAHLI", "curiosity")}>
                                    MAHLI
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MARDI", "curiosity")}>
                                    MARDI
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="box box--accent"></div>

                    <div className="box box--trans-black">
                        <h1>Opportunity</h1>
                        <h2>
                            Nicknamed "Oppy", the Opportunity rover landed in the Meridiani Planum on 25th January 2004, lasting until 10th June 2018, 57x longer than it was
                            designed to last!
                        </h2>
                        <ul className="cameraList">
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("FHAZ", "opportunity")}>
                                    FHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("RHAZ", "opportunity")}>
                                    RHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("NAVCAM", "opportunity")}>
                                    NAVCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("PANCAM", "opportunity")}>
                                    PANCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MINITES", "opportunity")}>
                                    MINITES
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="row">
                    <div className="box box--trans-black">
                        <h1>Opportunity</h1>
                        <h2>
                            Nicknamed "Oppy", the Opportunity rover landed in the Meridiani Planum on 25th January 2004, lasting until 10th June 2018, 57x longer than it was
                            designed to last!
                        </h2>
                        <ul className="cameraList">
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("FHAZ", "opportunity")}>
                                    FHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("RHAZ", "opportunity")}>
                                    RHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("NAVCAM", "opportunity")}>
                                    NAVCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("PANCAM", "opportunity")}>
                                    PANCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MINITES", "opportunity")}>
                                    MINITES
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="box box--accent"></div>
                </div>

                {/* ROW 3 */}
                <div className="row">
                    <div className="box box box--accent"></div>

                    <div className="box box--trans-black">
                        <h1>Spirit</h1>
                        <h2>
                            Twin to Opportunity, this rover landed on the opposite side of Mars, Spirit landed in the Gusev crater on 4th January 2004. However, it only lasted half
                            as long as its twin, becoming stuck in soft sand on 1st May 2009
                        </h2>
                        <ul className="cameraList">
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("FHAZ", "spirit")}>
                                    FHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("RHAZ", "spirit")}>
                                    RHAZ
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("NAVCAM", "spirit")}>
                                    NAVCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("PANCAM", "spirit")}>
                                    PANCAM
                                </button>
                            </li>
                            <li>
                                <button className="camerabutton" onClick={() => goToCameras("MINITES", "spirit")}>
                                    MINITES
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
