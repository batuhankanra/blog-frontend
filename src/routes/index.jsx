import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/mainLayout";
import About from "~/pages/about";
import Categories from "~/pages/categories";
import Contact from "~/pages/contact";
import Home from "~/pages/home";
import LastPost from "~/pages/lastPost";
import Login from "~/pages/login";
import NewPost from "~/pages/newPost";
import NotFound from "~/pages/notFound";
import PopulerPost from "~/pages/populerPost";
import Register from "~/pages/register";



const routes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/categories",
                element:<Categories />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/newPost',
                element:<NewPost />
            },
            {
                path:'/populerPost',
                element:<PopulerPost/>
            },
            {
                path:'/lastPost',
                element:<LastPost />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])
export default routes