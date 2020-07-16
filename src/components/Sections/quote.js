import React from "react"
import Fade from "react-reveal"

const QuoteSection = () => {
    return (
        <div className="Quote-container margin-left">
            <Fade>
                <p className="Quote-paragraph">
                    CoraLibre ist kompatibel mit der offiziellen Corona-Warn-App und arbeitet mit einem transparentem Tracing-Protokoll ohne Google Services.
                </p>
            </Fade>
        </div>
    );
};

export default QuoteSection