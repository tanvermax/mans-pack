import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Component/Mainlayout/Mainlayout";
import Home from "../Component/Mainlayout/Home";
import Ecom from "../Pages/Service/Ecom";
import Contact from "../Pages/Contact/Contact";
import Aboutus from "../Pages/AboutUs/Aboutus";

export const Routs= createBrowserRouter([
    {
        path:"/",
        element: <Mainlayout></Mainlayout>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
            {
                path:"e-commerce-packaging",
                element:<Ecom></Ecom>,

            },
            {
                path:"contactus",
                element:<Contact></Contact>
            },

            {
                path:"aboutus",
                element:<Aboutus></Aboutus>
            }
        ]
    }
])