import React from "react"
import hero_image from "../../assets/images/header.png"
import {Link} from "gatsby"


const HeroSection = () => {
    return (
        <div className="Hero-container" id='start'>
            <div className="Hero-container__text margin-left">
                <h1>Die Alternative zur Corona-Warn-App ohne Google Services.</h1>
                <hr/>
                <p>
                    Nicht jeder kann oder möchte die offizielle Corona-Warn-App nutzen. Wir bieten euch eine freie
                    Alternative.</p>
                <p>
                    Lese hier mehr darüber: <Link className="link" to="/#reasons">5 Gründe für CoraLibre</Link>
                </p>
                <p>
                    <Link className="button green-button" to="/#support">Unterstütze uns!</Link>
                </p>
            </div>
            <div className="Hero-container__image">
                <img src={hero_image} alt="Open Source Implementierung der Corona Tracing-API"/>
            </div>
        </div>
    );
};

export default HeroSection