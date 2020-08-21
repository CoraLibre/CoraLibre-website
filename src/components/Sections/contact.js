import React from "react"
import idea_image from "../../assets/images/ideas.png"


const ContactSection = () => {
    return (
        <div className="Contact-container" id='contact'>
            <div className="Contact-grid">
                <div>
                    <img className="Contact-image" src={idea_image} alt="Illustration von einem Mann, dem Ideen durch den Kopf gehen"/>
                </div>
                <div>
                    <small className="subtitle">Kontakt</small>
                    <hr className="line grey-border-top"/>
                    <h2>Hast du noch Fragen, Wünsche, Anregungen?</h2>
                    <p>Wir suchen noch nach tatkräftiger Unterstützung in der App-Entwicklung.<br/>
                    Schreib uns gerne eine E-Mail an <a className="link" href="mailto:info@coralibre.de">info(at)coralibre.de</a>!</p>
                </div>

            </div>
        </div>
    );
};

export default ContactSection