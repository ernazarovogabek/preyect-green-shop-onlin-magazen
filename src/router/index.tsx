import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";

import Shop from "../pages/shop/index"
import Checkout from "../components/profle/pagess/orders/order-card/checkout";
import Profle from '../components/profle'




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
        {
            path: "/profle",
            element: <Profle />,
        },
        {
            path: "/shop",
            element: <Shop />,
        },
        {
           path: "/checkout",
           element: <Checkout/>,
        },
         
        

    ]

)