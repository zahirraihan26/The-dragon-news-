import { createBrowserRouter } from "react-router";
import HomeLaout from "../Laouts/HomeLaout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLaout from "../Laouts/AuthLaout";

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
            path: 'news',
            element: <h2>news laout</h2>
        },
         {
            path: '/*',
            element: <h2>Error 404</h2>
        },
    ])

    export default router