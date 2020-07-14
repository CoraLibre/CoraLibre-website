import React from "react"


const ReasonsSection = () => {
    return (
        <div className="Reasons-container margin-left" id='reasons'>
            <h2>4 Gründe für die CoraLibre-App</h2>
            <div className="Reasons-grid">
                <div>
                    <h4>1. Support für Nicht-Android-Nutzer</h4>
                    <p>
                        CoraLibre ist auch für Nutzer zugänglich, die nicht das Android-Betriebssystem nutzen, sondern zum Beispiel LineageOS und /e/.
                    </p>
                </div>
                <div>
                    <h4>2. Kein Google-Play-Service nötig</h4>
                    <p>
                    CoraLibre kommt ohne Google-Play-Services aus und bietet die selben Funktionen wie die offizielle
                    Corona-Warn-App.
                </p></div>
                <div>
                    <h4>3. Auch Unterstützung für ältere Smartphones</h4>
                    <p>
                        Auch Nutzer, die nicht über die benötigten System-Anforderungen für die offizielle App verfügen, können CoraLibre nutzen.
                    </p>
                </div>
                <div>
                    <h4>4. Transparenter Quellcode</h4>
                    <p>
                        Der Quellcode des Google Tracing Protokolls ist nicht offen zugänglich, bei CoraLibre kann man diesen jedoch komplett einsehen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReasonsSection