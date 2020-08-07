import React from "react"
import {Location} from "@reach/router"
import Header from "./Header"
import Headroom from "react-headroom"

const Navigation = () => (
    <Location>
        {({location}) => (
            <Headroom>
                <div className="header">
                    <Header location={location}/>
                </div>
            </Headroom>
        )}
    </Location>
);

export default Navigation