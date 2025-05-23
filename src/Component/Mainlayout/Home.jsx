import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Aboutus from '../Aboutus/Aboutus';
import Ourservice from '../Ourservice/Ourservice';
import Amessage from '../Amessage/Amessage';
import Ourclient from '../Ourclient/Ourclient';
import Newspart from '../Newspaert/Newspart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newspart></Newspart>
            <Section1></Section1>
            <Aboutus></Aboutus>
            <Ourservice></Ourservice>
            <Amessage></Amessage>
            <Ourclient></Ourclient>
        </div>
    );
};

export default Home;