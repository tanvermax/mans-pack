import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Component/Mainlayout/Mainlayout";
import Home from "../Component/Mainlayout/Home";
import Ecom from "../Pages/Service/Ecom";
import Contact from "../Pages/Contact/Contact";
import Aboutus from "../Pages/AboutUs/Aboutus";
import Industrial from "../Pages/Service/Industrialpack/Industrial";
import ErrorPage from "../Component/Mainlayout/ErrorPage";
import Dashbord from "../Admin/Dashbord/Dashbord";
import ItemDetails from "../Admin/Itemdetails/ItemDetails";
import Login from "../Component/Authentication/Login";
import Signup from "../Component/Authentication/Signup";

export const Routs = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "dashboard",
                element: <Dashbord></Dashbord>,
                children: [
                    {
                        path: 'itemdetails',
                        element: <ItemDetails></ItemDetails>
                    }
                ]
            }, {
                path: "/",
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "e-commerce-packaging",
                element: <Ecom></Ecom>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "contactus",
                element: <Contact></Contact>,
                errorElement: <ErrorPage></ErrorPage>
            },

            {
                path: "aboutus",
                element: <Aboutus></Aboutus>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "industrial",
                element: <Industrial></Industrial>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"signup",
                element:<Signup></Signup>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])