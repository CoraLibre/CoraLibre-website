import React from "react"
import hero_image from "../../assets/images/header.png"


const HeroSection = () => {
    return (
        <div>
            <div className="Hero-container">
                <div className="Hero-container__text">
                <h1>CoraLibre</h1>
                <p>
                    Eine freie Open Source Implementierung der Corona-Tracing-API von Apple / Google für Android.
                </p>
                <p>
                    Kompatible Alternative zur deutschen Corona-Warn-App, die ohne Google-Play Services auskommt.
                </p>
                </div>
                <div className="Hero-container__image">
                    <img src={hero_image} alt="CoraLibre App"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection