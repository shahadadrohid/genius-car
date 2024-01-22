import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Card from "../Home/Card";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/card',
                element: <Card></Card>
            },
            {
                path: '/checkout/:id',
                element:
                    <PrivateRoute>
                        <CheckOut></CheckOut>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-genius-car.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element:
                    <PrivateRoute>
                        <Bookings></Bookings>
                    </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;