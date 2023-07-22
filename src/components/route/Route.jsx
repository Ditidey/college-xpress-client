import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/homepages/Home";
import Login from "../../pages/loginPages/Login";
import Register from "../../pages/loginPages/Register";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])


export default router;