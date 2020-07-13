import React from 'react'
import {Link} from 'gatsby'
import Headroom from 'react-headroom'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    return (
        <Headroom>
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
                        <AnchorLink to="#support">Unterstützung</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="#contact">Kontakt</AnchorLink>
                    </li>
                </ul>
            </div>
        </Headroom>
    );
};

export default Header;