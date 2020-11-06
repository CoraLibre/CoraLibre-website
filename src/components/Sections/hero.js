import React from "react"
import hero_image from "../../assets/images/header.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next'

const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <div className="Hero-container" id='start'>
            <div className="Hero-container__text">
                <h1><Trans>Die Alternative zur Corona-Warn-App ohne Google Services.</Trans></h1>
                <hr className="line grey-border-top"/>
                <p>
                    <Trans>Eine transparente OpenSource-Lösung für ältere Smartphones und andere Betriebssysteme.</Trans></p>
                <p>
                    <Trans>Lies hier mehr darüber:</Trans>&nbsp;<AnchorLink className="link" href="#reasons"><Trans>4 Gründe für CoraLibre</Trans></AnchorLink>
                </p>
                <p>
                    <AnchorLink className="button green-button" href="#support"><Trans>Unterstütze uns!</Trans></AnchorLink>
                </p>
            </div>
            <div className="Hero-container__image">
                <img src={hero_image} alt={t('Open-Source-Implementierung der Google-Tracing-API')}/>
            </div>
        </div>
    );
};

export default HeroSection