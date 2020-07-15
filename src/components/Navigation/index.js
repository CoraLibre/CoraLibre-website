import React from "react"
import { Location } from "@reach/router"
import Header from "./Header"
import Headroom from "react-headroom"

const Navigation = () => (
    <Location>
        {({ location }) => (
            <Headroom>
                <Header location={location}/>
            </Headroom>
        )}
    </Location>
);

export default Navigation