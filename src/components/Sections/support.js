import React from "react"
import support_image from "../../assets/images/support.png"


const SupportSection = () => {
    return (
        <div className="Support-container" id='support'>
            <div className="Support-text-item">
                <small className="subtitle white">Unterstützung</small>
                <hr className="line white-border-top"/>
                <h2>Auch du kannst uns dabei helfen, CoraLibre zu verwirklichen!</h2>
                <p>Die CoraLibre-App wird ehrenamtlich und durch Förderprojekte stetig weiterentwickelt.
                    Trotzdem brauchen wir eure Unterstützung und freuen uns über helfende Hände. Wenn du dich als
                    Entwickler angesprochen fühlst, zögere nicht und nimm Kontakt zu uns auf.</p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/CoraLibre/"
                      className="button white-button">
                    Zum Projekt
                </a></p>
            </div>
            <div className="Support-image-item">
                <img src={support_image} alt="Ein Mann arbeitet am Computer" className="Support-image"/>
            </div>
        </div>
    );
};

export default SupportSection