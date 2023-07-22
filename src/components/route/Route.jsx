import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/homepages/Home";
import Login from "../../pages/loginPages/Login";
import Register from "../../pages/loginPages/Register";
import CollegePage from "../../pages/collegepages/CollegePage";
import AdmissionPage from "../../pages/admissionpages/AdmissionPage";
import MyCollege from "../../pages/mycollegepages/MyCollege";
import CollegeDetails from "../../pages/collegepages/CollegeDetails";
import ProfilePage from "../../pages/profilePages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AddReview from "../../pages/mycollegepages/AddReview";
 

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
            },
            {
                path: '/college-page',
                element: <CollegePage></CollegePage>
            },
            {
              path: '/college-details/:id',
              element: <ProtectedRoute><CollegeDetails></CollegeDetails></ProtectedRoute>
            },
            {
                path: '/admission-page',
                element: <AdmissionPage></AdmissionPage>
            },
            {
                path: '/my-college',
                element: <MyCollege></MyCollege>
            },
            {
                path: '/pro-page',
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/add-review',
                element: <ProtectedRoute><AddReview></AddReview></ProtectedRoute>
            }

        ]
    }
])


export default router;