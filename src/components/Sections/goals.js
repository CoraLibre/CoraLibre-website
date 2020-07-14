import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"


const GoalsSection = () => {
    return (
        <div className="Goals-container margin-left" id='goals'>
            <h2>Unsere Ziele</h2>
            <div className="Goals-grid">
                <div>
                    Wir bauen eine freie und vollkommen transparente Implementierung des Contact-Tracing-Protokolls für Android.
                </div>
                <div>
                    Eine alternative App zur deutschen Corona-Warn-App, die auch andere Betriebssysteme und Nutzer älterer Smartphones unterstützt.
                </div>
                <div>
                    Dabei übernehmen wir viel vom ursprünglichen Code der Corona-Warn-App und garantieren so eine Kompabilität zwischen beiden Apps.
                </div>
            </div>
            <p>Hilf uns, diese Ziele zu verwirklichen und unterstütze uns gerne als Entwickler oder beim Community Management.</p>
            <p><AnchorLink href="#contact" className="button green-button">Kontakt aufnehmen</AnchorLink></p>
        </div>
    );
};

export default GoalsSection