import { createBrowserRouter } from "react-router-dom";
import AddedReviews from "../components/AddedReviews/AddedReviews";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/Service&Reviews/ServiceDetails";
import Services from "../components/Services/Services";
import Update from "../components/Update/Update";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoute";
import About from "../components/Home/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params})=> fetch(`https://travel-photographer-server.vercel.app/update/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path:'/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://travel-photographer-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/addreview/:id',
                element: <PrivateRoutes><AddedReviews></AddedReviews></PrivateRoutes>,
                loader: ({params})=> fetch(`https://travel-photographer-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;