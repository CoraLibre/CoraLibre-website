import React from "react"
import hero_image from "../../assets/images/header.png"
import {Link} from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
                    Lese hier mehr darüber: <AnchorLink className="link" href="#reasons">4 Gründe für CoraLibre</AnchorLink>
                </p>
                <p>
                    <AnchorLink className="button green-button" href="#support">Unterstütze uns!</AnchorLink>
                </p>
            </div>
            <div className="Hero-container__image">
                <img src={hero_image} alt="Open Source Implementierung der Corona Tracing-API"/>
            </div>
        </div>
    );
};

export default HeroSection