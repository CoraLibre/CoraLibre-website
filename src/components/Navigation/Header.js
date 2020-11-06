import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo_large from "../../assets/images/logo_large-version.png"
import logo_small from "../../assets/images/logo_small-version.png"
import Scrollspy from 'react-scrollspy'
import hessen from "../../assets/images/hessen.png"
import {Link, Trans, useI18next, useTranslation} from 'gatsby-plugin-react-i18next'


const Header = ({location}) => {
    const {t} = useTranslation();
    const {languages, originalPath} = useI18next();
    const pathname = location.href ? location.href : '';

    if (pathname.includes(`datenschutz`)) {
        return (
            <div className="container">
                <Link to="/">
                    <img src={logo_large} alt="CoraLibre Logo" className="logo-large"/>
                    <img src={logo_small} alt="CoraLibre Logo" className="logo-small"/>
                </Link>

                <ul>
                    <li>
                        <Link to="/#reasons"><Trans>Warum?</Trans></Link>
                    </li>
                    <li>
                        <Link to="/#support"><Trans>Unterstützung</Trans></Link>
                    </li>
                    <li>
                        <Link to="/#contact"><Trans>Kontakt</Trans></Link>
                    </li>
                    <li>
                        <Link to="/#hessen">
                            <img src={hessen} alt={t('Gefördert durch die Landesregierung Hessen')}
                                 className="Hessen-badge"/>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    } else
        return (
            <div className="container">
                <Link to="/">
                    <img src={logo_large} alt="CoraLibre Logo" className="logo-large"/>
                    <img src={logo_small} alt="CoraLibre Logo" className="logo-small"/>
                </Link>

                <Scrollspy items={['reasons', 'support', 'contact', 'hessen']}
                           currentClassName="is-current-section" scrolledPastClassName="scrolled-past-section"
                           offset={0} className="scrollspy-container">
                    <li>
                        <AnchorLink href="#reasons"><Trans>Warum?</Trans></AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#support"><Trans>Unterstützung</Trans></AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact"><Trans>Kontakt</Trans></AnchorLink>
                    </li>
                    <li><AnchorLink href="#hessen">
                        <img src={hessen} alt={t('Gefördert durch die Landesregierung Hessen')}
                             className="Hessen-badge"/>
                    </AnchorLink>
                    </li>
                </Scrollspy>
                <ul className="languages">
                    {languages.map((lng) => (
                        <li key={lng}>
                            <Link to={originalPath} language={lng}>
                                {lng}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default Header
