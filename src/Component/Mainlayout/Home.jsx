import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loading from '../Loading';

const Banner = React.lazy(() => import('../Banner/Banner'));
const Section1 = React.lazy(() => import('../Section1/Section1'));
const Aboutus = React.lazy(() => import('../Aboutus/Aboutus'));
const Ourservice = React.lazy(() => import('../Ourservice/Ourservice'));
const Amessage = React.lazy(() => import('../Amessage/Amessage'));
const Ourclient = React.lazy(() => import('../Ourclient/Ourclient'));
const Newspart = React.lazy(() => import('../Newspaert/Newspart'));
const StatsSection = React.lazy(() => import('../StatsSection/StatsSection'));

const Home = () => {
    
    useEffect(() => {
        // Scroll to top on first render (refresh)
        window.scrollTo({
          top: 0,
          behavior: 'auto', // Or 'smooth' if you prefer
        });
    }, []);


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mans Packaging-Packaging Manufacturer in Bangladesh.</title>
            </Helmet>
            <Suspense fallback={<Loading />}>
                <Banner />
                <Section1 />
                <Aboutus />
                <Ourservice />
                <Newspart />
                <Amessage />
                <StatsSection />
                <Ourclient />
            </Suspense>
        </div>
    );
};

export default Home;