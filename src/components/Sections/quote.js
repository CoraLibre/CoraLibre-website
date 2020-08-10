import React from "react"
import Fade from "react-reveal"

const QuoteSection = () => {
    return (
        <div className="Quote-container margin-left" id='quote'>
            <Fade>
                <p className="Quote-paragraph">
                    CoraLibre ist eine offene Alternative zur offiziellen Corona-Warn-App und funktioniert ohne intransparente Google Services.
                </p>
            </Fade>
        </div>
    );
};

export default QuoteSection