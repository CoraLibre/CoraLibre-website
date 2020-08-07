import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"


const GoalsSection = () => {
    return (
        <div className="Goals-container margin-left" id='goals'>
            <small className="subtitle">Unsere Ziele</small>
            <h2>Wir bauen eine freie und transparente Alternative zur offiziellen Corona-Warn-App.</h2>
            <div className="Goals-grid">
                <div>
                    <p>
                        Unser Ziel ist, eine vollkommen transparente Implementierung des Contact-Tracing-Protokolls für Android zu entwickeln.
                        Dabei unterstützen wir auch andere Betriebssysteme und Nutzer älterer Smartphones.
                        Bei der Implementierung übernehmen wir viel vom ursprünglichen Code der Corona-Warn-App und garantieren so eine Kompabilität zwischen beiden Apps.
                    </p>
                </div>
            </div>
            <p>Hilf uns, diese Ziele zu verwirklichen und unterstütze uns gerne bei der Weiterentwicklung der App.</p>
            <p><AnchorLink href="#contact" className="button green-button">Kontakt aufnehmen</AnchorLink></p>
        </div>
    );
};

export default GoalsSection