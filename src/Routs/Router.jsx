import { createBrowserRouter } from "react-router";
import HomeLaout from "../Laouts/HomeLaout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLaout from "../Laouts/AuthLaout";
import NewsDetails from "../Pages/NewsDetails";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Career from "../Pages/Career";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLaout></HomeLaout>,

            children:[
                {
                    path:'',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<Categorynews></Categorynews>,
                    loader: () => fetch("/news.json"),

                }
            ]

        },
         {
            path: '/auth',
            element: <AuthLaout></AuthLaout>,
            children:[
                {
                    path: '/auth/login',
                    element:<Login></Login>
                },
                {
                    path: '/auth/register',
                    element:<Register></Register>
                },
            ]

        },
         {
            path: '/news/:id',
            element: <NewsDetails></NewsDetails>
        },
         {
            path: '/about',
            element: <About></About>
        },
         {
            path: '/career',
            element: <Career></Career>
        },
         {
            path: '/*',
            element: <ErrorPage></ErrorPage>
        },
    ])

    export default router