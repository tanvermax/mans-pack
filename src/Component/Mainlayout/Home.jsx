import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Aboutus from '../Aboutus/Aboutus';
import Ourservice from '../Ourservice/Ourservice';
import Amessage from '../Amessage/Amessage';
import Ourclient from '../Ourclient/Ourclient';
import Newspart from '../Newspaert/Newspart';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Mans Packaging - Corrugated Packaging in Bangladesh.</title>
            </Helmet>
            <Banner></Banner>
            <Section1></Section1>

            <Aboutus></Aboutus>
            <Ourservice></Ourservice>

            <Newspart></Newspart>
            <Amessage></Amessage>
          
            
           
            <Ourclient></Ourclient>
        </div>
    );
};

export default Home;