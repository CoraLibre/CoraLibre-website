import React from "react"
import hero_image from "../../assets/images/header.png"


const HeroSection = () => {
    return (
        <div>
            <div className="Hero-container">
                <div className="Hero-container__text margin-left">
                    <h1>Die Alternative zur Corona-Warn-App ohne Google Services.</h1>
                    <hr/>
                    <p>
                    Eine freie Open Source Implementierung der Corona-Tracing-API für Android.
                </p>
                <p>
                    Kompatible Alternative zur deutschen Corona-Warn-App, die ohne Google-Play Services auskommt.
                </p>
                </div>
                <div className="Hero-container__image">
                    <img src={hero_image} alt="Open Source Implementierung der Corona Tracing-API"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection