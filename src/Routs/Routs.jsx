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
import PrivateRoute from "../Hook/PrivateRoute";
import Dynamicbanner from "../Admin/Dynamicbanner/Dynamicbanner";
import UpdateBanner from "../Admin/Dynamicbanner/UpdateBanner";
import DynamicPortfolio from "../Admin/Dynamicportfolio/DynamicPortfolio";
import Clinetdynamic from "../Admin/Clinets/Clinetdynamic";
// import PrivateRoute from './PrivateRoute';

export const Routs = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "dashboard",
                element: <PrivateRoute> <Dashbord></Dashbord></PrivateRoute>,
                children: [
                    {
                        path: 'itemdetails',
                        element: <ItemDetails></ItemDetails>,
                        loader: ()=>fetch("https://man-pack-server.vercel.app/newspost")
                    },
                    {
                        path: "userdetails",
                        element: <UserDetails></UserDetails>,
                        loader: () => fetch("https://man-pack-server.vercel.app/user"),

                    },
                    {
                        path:"banner/:id",
                        element:<UpdateBanner/>,
                        loader: ({params}) => fetch(`https://man-pack-server.vercel.app/banner/${params.id}`),
                    },{
                        path:"/dashboard/portfolio",
                        element:<DynamicPortfolio/>
                    },
                    
                    {
                        path:"/dashboard/clinet",
                        element:<Clinetdynamic/>
                    },
                    {
                        path:"dynamicbanner",
                        element: <Dynamicbanner></Dynamicbanner>
                    },
                    {
                        path: "adminhome",
                        element: <Adminhome></Adminhome>
                    },
                    {
                        path: "sales",
                        element: <SalesAnalytics></SalesAnalytics>
                    }
                ],
                errorElement: <ErrorPage></ErrorPage>
            }, {
                path: "/",
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "newspart",
                element: <AllNews></AllNews>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "e-commerce-packaging",
                element: <Ecom></Ecom>,
                errorElement: <ErrorPage></ErrorPage>

            }, {
                path: "foodpack",
                element: <Foodpack></Foodpack>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "garmentpack",
                element: <Garmentpack></Garmentpack>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "contactus",
                element: <Contact></Contact>,
                errorElement: <ErrorPage></ErrorPage>
            }, {
                path: "portfolio",
                element: <Portfolio></Portfolio>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/Knowledge",
                element: <Knowledge></Knowledge>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "enquiry",
                element: <EnquiryCart></EnquiryCart>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "aboutus",
                element: <Aboutus></Aboutus>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "products",
                element: <Products></Products>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "industrial",
                element: <Industrial></Industrial>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "login",
                element: <Login></Login>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "signup",
                element: <Signup></Signup>,
                errorElement: <ErrorPage></ErrorPage>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])