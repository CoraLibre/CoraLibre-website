import React from "react"
import Fade from "react-reveal"

const QuoteSection = () => {
    return (
        <div className="Quote-container margin-left">
            <Fade>
                <p className="Quote-paragraph">
                    CoraLibre ist eine offene Alternative zur offiziellen Corona-Warn-App und funktioniert ohne Google Services. Das von CoraLibre verwendete Tracing-Protokoll ist komplett transparent.
                </p>
            </Fade>
        </div>
    );
};

export default QuoteSection