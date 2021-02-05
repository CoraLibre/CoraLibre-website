import React from "react"
import AppImageOne from "../../assets/images/coralibre_Screenshot_01.png"
import AppImageTwo from "../../assets/images/coralibre_Screenshot_02.png"
import AppImageThree from "../../assets/images/coralibre_Screenshot_03.png"

const HessenSection = () => {
    return (
        <div className="Preview-container" id='preview'>
            <div>
                <img src={AppImageOne} alt={('Open-Source-Implementierung der Google-Tracing-API')}/>
                <img src={AppImageTwo} alt={('Open-Source-Implementierung der Google-Tracing-API')}/>
                <img src={AppImageThree} alt={('Open-Source-Implementierung der Google-Tracing-API')}/>
                <a target="_blank" rel="noopener noreferrer" download href="../../assests/download/CoraLibre.apk"
                   className="button green-button">Download CoraLibre.apk</a>
            </div>

        </div>
    );
};

export default HessenSection