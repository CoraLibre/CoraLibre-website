import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo_large from "../../assets/images/logo_large-version.png"
import logo_small from "../../assets/images/logo_small-version.png"
import Scrollspy from 'react-scrollspy'


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
                <Scrollspy items={ ['quote', 'reasons', 'support', 'contact'] } currentClassName="is-current-section" scrolledPastClassName ="scrolled-past-section" offset={-250} className="scrollspy-container">
                        <li>
                            <AnchorLink href="#quote"/>
                        </li>
                        <li>
                            <AnchorLink href="#reasons">Warum?</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#support">Unterstützung</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#contact">Kontakt</AnchorLink>
                        </li>
                    </Scrollspy>
            </div>
        );
}

export default Header
