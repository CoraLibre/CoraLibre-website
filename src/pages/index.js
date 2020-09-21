import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import ReasonsSection from "../components/Sections/reasons"
import ContactSection from "../components/Sections/contact"
import SupportSection from "../components/Sections/support"
import HeroSection from "../components/Sections/hero"
import QuoteSection from "../components/Sections/quote"
import HessenSection from "../components/Sections/hessen"

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <html lang="de" />
                <title>CoraLibre</title>
                <meta name="description" content="Eine transparente OpenSource-Lösung und Alternative zur Corona-Warn-App ohne Google Services." />
                <meta name="theme-color" content="#1db5c4" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="CoraLibre, Corona-Warn-App, Google Play, Google Services, OpenSource, Alternative, OpenSource-Lösung, transparent" />
            </Helmet>
            <HeroSection/>
            <QuoteSection/>
            <ReasonsSection/>
            <SupportSection/>
            <ContactSection/>
            <HessenSection/>
        </Layout>
    );
};

export default IndexPage;
