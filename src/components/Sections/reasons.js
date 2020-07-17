import React from "react"
import support_icon from "../../assets/images/support.png"
import service_icon from "../../assets/images/services.png"
import transparency_icon from "../../assets/images/transparency.png"
import old_icon from "../../assets/images/old.png"

const ReasonsSection = () => {
    return (
        <div className="Reasons-container margin-left" id='reasons'>
            <small className="subtitle white">Warum CoraLibre?</small>
            <h2>4 Gründe für die CoraLibre-App:</h2>
            <div className="Reasons-grid">
                <div className="Reasons-grid-item">
                    <img src={support_icon} alt="Support für andere Betriebssysteme"/>
                    <h4>Support für andere Betriebssysteme</h4>
                    <p>
                        CoraLibre ist auch für Nutzer zugänglich, die nicht das Android- oder Apple-Betriebssystem nutzen, sondern zum Beispiel LineageOS und /e/.
                    </p>
                </div>
                <div className="Reasons-grid-item">
                    <img src={service_icon} alt="CoraLibre arbeitet mit eigenen Services"/>
                    <h4>Keine Google-Play-Services nötig</h4>
                    <p>
                    CoraLibre kommt ohne Google-Play-Services aus und bietet die selben Funktionen wie die offizielle
                    Corona-Warn-App.
                </p></div>
                <div className="Reasons-grid-item">
                    <img src={old_icon} alt="Älteres Modell eines Smartphones"/>
                    <h4>Auch ältere Smartphones werden unterstützt</h4>
                    <p>
                        Auch Nutzer, die nicht über die benötigten System-Anforderungen für die offizielle App verfügen, können CoraLibre nutzen.
                    </p>
                </div>
                <div className="Reasons-grid-item">
                    <img src={transparency_icon} alt="Transparenter Quellcode"/>
                    <h4>Transparenter Quellcode</h4>
                    <p>
                        Der Quellcode des offiziellen Google Tracing Protokolls ist nicht offen zugänglich, bei CoraLibre kann man diesen jedoch komplett einsehen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReasonsSection