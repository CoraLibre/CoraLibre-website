import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import placeholder from "../../assets/images/placeholder.png"
import Scrollspy from 'react-scrollspy'


const Header = ({location}) => {
    const pathname = location.href ? location.href : '';

    if (pathname.includes(`datenschutz`)) {
        return (
            <div className="container">
                    <Link to="/">
                        <img src={placeholder} alt="CoraLibre Logo" className="logo-image"/>
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
                    <img src={placeholder} alt="CoraLibre Logo" className="logo-image"/>
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
