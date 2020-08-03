import React from "react"
import support_icon from "../../assets/images/support_icon.png"
import service_icon from "../../assets/images/services_icon.png"
import transparency_icon from "../../assets/images/transparency_icon.png"
import old_icon from "../../assets/images/old_icon.png"

const ReasonsSection = () => {
    return (
        <div className="Reasons-container margin-left" id='reasons'>
            <small className="subtitle white">Warum CoraLibre?</small>
            <h2>4 Gründe für die CoraLibre-App:</h2>
            <div className="Reasons-grid">
                <div className="Reasons-grid-item">
                    <img src={support_icon} alt="Support für andere Betriebssysteme"/>
                    <div className="Reasons-grid-item-text-wrapper">
                    <h3>Support für andere Betriebssysteme</h3>
                    <p>
                        CoraLibre ist auch für Nutzer zugänglich, die nicht das Android- oder Apple-Betriebssystem nutzen, sondern zum Beispiel LineageOS und /e/.
                    </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <img src={service_icon} alt="CoraLibre arbeitet mit eigenen Services"/>
                    <div className="Reasons-grid-item-text-wrapper">

                    <h3>Keine Google-Play-Services nötig</h3>
                    <p>
                    CoraLibre kommt ohne Google-Play-Services aus und bietet die selben Funktionen wie die offizielle
                    Corona-Warn-App.
                </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <img src={old_icon} alt="Älteres Modell eines Smartphones"/>
                    <div className="Reasons-grid-item-text-wrapper">

                    <h3>Auch ältere Smartphones werden unterstützt</h3>
                    <p>
                        Auch Nutzer, die nicht über die benötigten System-Anforderungen für die offizielle App verfügen, können CoraLibre nutzen.
                    </p>
                    </div>
                </div>
                <div className="Reasons-grid-item">
                    <img src={transparency_icon} alt="Transparenter Quellcode"/>
                    <div className="Reasons-grid-item-text-wrapper">

                    <h3>Transparenter Quellcode</h3>
                    <p>
                        Der Quellcode des offiziellen Google Tracing Protokolls ist nicht offen zugänglich, bei CoraLibre kann man diesen jedoch komplett einsehen.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonsSection