import React from "react"
import idea_image from "../../assets/images/ideas.png"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next'


const ContactSection = () => {
    const {t} = useTranslation();
    return (
        <div className="Contact-container" id='contact'>
            <div className="Contact-grid">
                <div>
                    <img className="Contact-image" src={idea_image} alt={t('Illustration von einem Mann, dem Ideen durch den Kopf gehen')} />
                </div>
                <div>
                    <small className="subtitle"><Trans>Kontakt</Trans></small>
                    <hr className="line grey-border-top"/>
                    <h2><Trans>Hast du noch Fragen, Wünsche, Anregungen?</Trans></h2>
                    <p><Trans>Wir suchen noch nach tatkräftiger Unterstützung in der App-Entwicklung.</Trans><br/>
                        <Trans>Schreib uns gerne eine E-Mail an</Trans>&nbsp;<a className="link" href="mailto:info@coralibre.de">info(at)coralibre.de</a>!</p>
                </div>

            </div>
        </div>
    );
};

export default ContactSection