import React from "react"
import support_icon from "../../assets/images/support_icon.png"
import service_icon from "../../assets/images/services_icon.png"
import transparency_icon from "../../assets/images/transparency_icon.png"
import old_icon from "../../assets/images/old_icon.png"
import {Trans} from 'gatsby-plugin-react-i18next'

const ReasonsSection = () => {
    return (
        <div className="Reasons-container" id='reasons'>
            <small className="subtitle white"><Trans>WARUM CORALIBRE?</Trans></small>
            <hr className="line white-border-top"/>
            <h2><Trans>4 Gründe für die CoraLibre-App:</Trans></h2>
            <div className="Reasons-grid">
                <div className="Reasons-grid-item">
                    <div><img src={support_icon} alt=""/></div>
                    <div className="Reasons-grid-item-text-wrapper">
                        <h3><Trans>Support für andere Betriebssysteme</Trans></h3>
                    <p>
                        <Trans>CoraLibre ist auch für Nutzer zugänglich, die Android ohne Google Play Services nutzen.</Trans>
                    </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <div><img src={service_icon} alt=""/></div>
                    <div className="Reasons-grid-item-text-wrapper">

                        <h3><Trans>Keine Google-Play-Services nötig</Trans></h3>
                    <p>
                    <Trans>CoraLibre kommt ohne Google-Play-Services aus und bietet die selben Funktionen wie die offizielle
                        Corona-Warn-App.</Trans>
                </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <div><img src={old_icon} alt=""/></div>
                    <div className="Reasons-grid-item-text-wrapper">

                        <h3><Trans>Auch ältere Smartphones unterstützt</Trans></h3>
                    <p>
                        <Trans>Auch Nutzer, die nicht über die benötigten System-Anforderungen für die offizielle App verfügen, können CoraLibre nutzen.*</Trans>
                    </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <div><img src={transparency_icon} alt=""/></div>
                    <div className="Reasons-grid-item-text-wrapper">

                        <h3><Trans>Transparenter Quellcode</Trans></h3>
                    <p>
                        <Trans>Der Quellcode des offiziellen Google Tracing Protokolls ist nicht offen zugänglich, bei CoraLibre kann man ihn hingegen komplett einsehen.</Trans>
                    </p>
                    </div>
                </div>
            </div>
            <small><Trans>*Voraussetzung ist ein Android-Smartphone, welches über eine Bluetooth LE Unterstützung verfügt.</Trans></small>
        </div>
    );
};

export default ReasonsSection