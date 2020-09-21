import React from "react"
import hero_image from "../../assets/images/header.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hessen from "../../assets/images/hessen.png"


const HeroSection = () => {
    return (
        <div className="Hessen-badge-container">
            <AnchorLink href="#hessen">
            <img src={hessen} alt="Gefördert durch die Landesregierung Hessen" className="Hessen-badge"/>
            </AnchorLink>
            <div className="Hero-container" id='start'>
                <div className="Hero-container__text">
                    <div className="Hessen-mobile-text">
                        <AnchorLink href="#hessen">
                            <img src={hessen} alt="Gefördert durch die Landesregierung Hessen" className="Hessen-mobile-badge"/>
                        </AnchorLink>
                    </div>
                    <h1>Die Alternative zur Corona-Warn-App ohne Google Services.</h1>
                    <hr className="line grey-border-top"/>
                    <p>
                        Eine transparente OpenSource-Lösung für ältere Smartphones und andere Betriebssysteme.</p>
                    <p>
                        Lies hier mehr darüber: <AnchorLink className="link" href="#reasons">4 Gründe für
                        CoraLibre</AnchorLink>
                    </p>
                    <p>
                        <AnchorLink className="button green-button" href="#support">Unterstütze uns!</AnchorLink>
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