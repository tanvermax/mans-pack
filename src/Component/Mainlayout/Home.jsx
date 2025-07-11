import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Aboutus from '../Aboutus/Aboutus';
import Ourservice from '../Ourservice/Ourservice';
import Amessage from '../Amessage/Amessage';
import Ourclient from '../Ourclient/Ourclient';
import Newspart from '../Newspaert/Newspart';
import { Helmet } from 'react-helmet';
import StatsSection from '../StatsSection/StatsSection';

const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Mans Packaging-Packaging Manufacturer in Bangladesh.</title>
            </Helmet>
            <Banner></Banner>
            <Section1></Section1>
            <Aboutus></Aboutus>
            <Ourservice></Ourservice>
            <Newspart></Newspart>
            <Amessage></Amessage>
            <StatsSection></StatsSection>
            <Ourclient></Ourclient>
        </div>
    );
};

export default Home;