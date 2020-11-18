import React from "react"
import {Trans} from 'gatsby-plugin-react-i18next'

const HessenSection = () => {
    return (
        <div className="Hessen-container" id='hessen'>
            <div>
                <small className="subtitle white"><Trans>FÖRDERUNG</Trans></small>
                <hr className="line white-border-top"/>
                <h2><Trans>Dieses Projekt wird von der hessischen Landesregierung gefördert.</Trans></h2>
                <p><Trans>Das Projekt CoraLibre wird finanziell durch das Land Hessen im Zeitraum vom 10.06.2020 bis 31.12.2020 unterstützt. Ziel des Vorhabens ist der Aufbau eines modernen Betriebs, um die Verfügbarkeit der App zu gewährleisten, als auch die internationale Vernetzung mit anderen Contact-Tracing-Apps voranzutreiben.</Trans></p>
            </div>

        </div>
    );
};

export default HessenSection