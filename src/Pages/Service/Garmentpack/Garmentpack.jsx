import React from 'react';
import Hook1 from '../Hook1';
import { Helmet } from 'react-helmet';

const Garmentpack = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mans Packaging | Garments Packaging Boxes And Solutions</title>
            </Helmet>

            <Hook1
                // photo2={`https://manspackaging.com/wp-content/uploads/2023/02/custom-food-carton-box-1024x683.jpg`}
                photo={"https://manspackaging.com/wp-content/uploads/2023/03/Garments-Packaging-1024x576.png"}
                mainheading={"Garments Packaging Boxes And Solutions"}
                headin1={"Lightweight & Cost-Effective: Fashion Industry Packaging Solutions"}

                description1={`Garments packaging boxes are essential in the fashion industry, providing a safe and secure way to store and transport clothing items. These boxes come in different shapes, sizes, and materials, and are designed to protect garments from damage during transportation and storage while maintaining their shape and quality.`}
                description12={`we understand the importance of packaging in the fashion industry, and we strive to provide our clients with customized garments packaging boxes that cater to their specific needs.`}
            >
            </Hook1>
        </>

    );
};

export default Garmentpack;