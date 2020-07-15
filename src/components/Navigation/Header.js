import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = ({location}) => {
    const pathname = location.href ? location.href : '';

    if (pathname.includes(`datenschutz`)) {
        return (
            <div className="header container">
                <p>
                    <Link to="/">CoraLibre</Link>
                </p>
                <ul>
                    <li>
                        <Link to="/#reasons">Gründe</Link>
                    </li>
                    <li>
                        <Link to="/#goals">Ziele</Link>
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
            <div className="header container">
                <p>
                    <Link to="/">CoraLibre</Link>
                </p>
                <ul>
                    <li>
                        <AnchorLink href="#reasons">Gründe</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#goals">Ziele</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#support">Unterstützung</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact">Kontakt</AnchorLink>
                    </li>
                </ul>
            </div>
    );
}

export default Header
