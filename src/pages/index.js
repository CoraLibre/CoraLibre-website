import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import ReasonsSection from "../components/Sections/reasons"
import ContactSection from "../components/Sections/contact"
import SupportSection from "../components/Sections/support"
import GoalsSection from "../components/Sections/goals"
import HeroSection from "../components/Sections/hero";

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>CoraLibre</title>
            </Helmet>
            <HeroSection/>
            <ReasonsSection/>
            <GoalsSection/>
            <SupportSection/>
            <ContactSection/>
        </Layout>
    );
};

export default IndexPage;
