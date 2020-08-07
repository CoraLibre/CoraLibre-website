import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import ReasonsSection from "../components/Sections/reasons"
import ContactSection from "../components/Sections/contact"
import SupportSection from "../components/Sections/support"
import HeroSection from "../components/Sections/hero"
import QuoteSection from "../components/Sections/quote"

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>CoraLibre</title>
            </Helmet>
            <HeroSection/>
            <QuoteSection/>
            <ReasonsSection/>
            <SupportSection/>
            <ContactSection/>
        </Layout>
    );
};

export default IndexPage;
