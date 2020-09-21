import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo_large from "../../assets/images/logo_large-version.png"
import logo_small from "../../assets/images/logo_small-version.png"
import Scrollspy from 'react-scrollspy'
import hessen from "../../assets/images/hessen.png";


const Header = ({location}) => {
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
                        <Link to="/#reasons">Warum?</Link>
                    </li>
                    <li>
                        <Link to="/#support">Unterstützung</Link>
                    </li>
                    <li>
                        <Link to="/#contact">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="/#hessen">
                            <img src={hessen} alt="Gefördert durch die Landesregierung Hessen" className="Hessen-badge"/>
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
                <Scrollspy items={ ['reasons', 'support', 'contact', 'hessen'] } currentClassName="is-current-section" scrolledPastClassName ="scrolled-past-section" offset={0} className="scrollspy-container">
                    <li>
                        <AnchorLink href="#reasons">Warum?</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#support">Unterstützung</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact">Kontakt</AnchorLink>
                    </li>
                    <li><AnchorLink href="#hessen">
                        <img src={hessen} alt="Gefördert durch die Landesregierung Hessen" className="Hessen-badge"/>
                    </AnchorLink>
                    </li>
                </Scrollspy>
            </div>
        );
}

export default Header
