import React from "react"
import Fade from "react-reveal"
import {Trans} from 'gatsby-plugin-react-i18next'

const QuoteSection = () => {
    return (
        <div className="Quote-container" id='quote'>
            <Fade>
                <p className="Quote-paragraph">
                    <Trans>CoraLibre ist eine offene Alternative zur offiziellen Corona-Warn-App und funktioniert ohne intransparente Google Services.</Trans>
                </p>
            </Fade>
        </div>
    );
};

export default QuoteSection