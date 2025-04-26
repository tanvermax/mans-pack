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
import UserDetails from "../Admin/UserDetails/UserDetails";
import SalesAnalytics from "../Admin/SalesAnalytics/SalesAnalytics";
import Adminhome from "../Admin/Adminhome/Adminhome";
import AllNews from "../Component/Newspaert/Allnews";
import Foodpack from "../Pages/Service/Foodpac/Foodpack";
import Garmentpack from "../Pages/Service/Garmentpack/Garmentpack";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Knowledge from "../Pages/Knowledge/Knowledge";
import EnquiryCart from "../Pages/EnquiryCart/Enquirycart";
import Products from "../Pages/EnquiryCart/Products";

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
                    },
                    {
                        path: "userdetails",
                        element: <UserDetails></UserDetails>,
                        loader: () => fetch("http://localhost:5000/user"),

                    },
                    {
                        path: "adminhome",
                        element: <Adminhome></Adminhome>
                    },
                    {
                        path: "sales",
                        element: <SalesAnalytics></SalesAnalytics>
                    }
                ]
            }, {
                path: "/",
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "newspart",
                element: <AllNews></AllNews>
            },
            {
                path: "e-commerce-packaging",
                element: <Ecom></Ecom>,
                errorElement: <ErrorPage></ErrorPage>

            }, {
                path: "foodpack",
                element: <Foodpack></Foodpack>
            },
            {
                path: "garmentpack",
                element: <Garmentpack></Garmentpack>
            },
            {
                path: "contactus",
                element: <Contact></Contact>,
                errorElement: <ErrorPage></ErrorPage>
            }, {
                path: "portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "/Knowledge",
                element: <Knowledge></Knowledge>
            },
            {
                path:"enquiry",
                element:<EnquiryCart></EnquiryCart>
            },
            {
                path: "aboutus",
                element: <Aboutus></Aboutus>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path:"products",
                element:<Products></Products>
            },
            {
                path: "industrial",
                element: <Industrial></Industrial>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])