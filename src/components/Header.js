import React from 'react';
import {Link} from 'gatsby';
import Headroom from 'react-headroom'


const Header = () => {
    return (
        <Headroom>
            <div className="header container">
                <p>
                    <Link to="/">CoraLibre</Link>
                </p>
                <ul>
                    <li>
                        <Link to="/#goals">Ziele</Link>
                    </li>
                    <li>
                        <Link to="/#reasons">Gründe</Link>
                    </li>
                    <li>
                        <Link to="/#support">Unterstützung</Link>
                    </li>
                    <li>
                        <Link to="/#contact">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </Headroom>
    );
};

export default Header;