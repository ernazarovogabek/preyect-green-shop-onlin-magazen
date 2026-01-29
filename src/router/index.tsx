import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
//import  Profiler  from "react";
import Shop from "../pages/shop/index"


export const router = createBrowserRouter(
    [
        {
            path : "/",
            element: <Home />,
        },

        {
            path : "/blog",
            element : <Blog />

        },
        // {
        //     path: "/profile",
        //     element: <Profile />,
        // },
        {
            path: "/shop",
            element: <Shop />,
        },
    ]

)