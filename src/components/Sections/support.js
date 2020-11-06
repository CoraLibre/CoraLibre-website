import React from "react"
import support_image from "../../assets/images/support.png"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next'

const SupportSection = () => {
    const {t} = useTranslation();
    return (
        <div className="Support-container" id='support'>
            <div className="Support-text-item">
                <small className="subtitle white"><Trans>Unterstützung</Trans></small>
                <hr className="line white-border-top"/>
                <h2><Trans>Auch du kannst uns dabei helfen, CoraLibre zu verwirklichen!</Trans></h2>
                <p><Trans>Die CoraLibre-App wird ehrenamtlich und durch Förderprojekte stetig weiterentwickelt.
                    Trotzdem brauchen wir eure Unterstützung und freuen uns über helfende Hände. Wenn du dich als
                    Entwickler angesprochen fühlst, zögere nicht und nimm Kontakt zu uns auf.</Trans></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/CoraLibre/"
                      className="button white-button">
                    <Trans>Zum Projekt</Trans>
                </a></p>
            </div>
            <div className="Support-image-item">
                <img src={support_image} alt={t('Ein Mann arbeitet am Computer')} className="Support-image"/>
            </div>
        </div>
    );
};

export default SupportSection