import {useRoutes} from 'react-router-dom'
import ErrorPage from "./errorPage.tsx";
import HomePage from "../pages/Home/HomePage.tsx";
import CollectionPage from "../pages/Collection/CollectionPage.tsx";
import CartPage from "../pages/Cart/CartPage.tsx";
import LoginPage from "../pages/Login/LoginPage.tsx";
import SignupPage from "../pages/Signup/SignupPage.tsx";
import AccountPage from "../pages/Account/AccountPage.tsx";
import AccountDetailsPage from "../pages/Account/AccountDetails/AccountDetailsPage.tsx";
import AccountChangePasswordPage from "../pages/Account/AccountChangePassword/AccountChangePasswordPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import DashboardProducts from "../pages/Dashboard/DashboardProducts/DashboardProducts.tsx";
import DashboardProductEditor from "../pages/Dashboard/DashboardProductEditor/DashboardProductEditor.tsx";
import DashboardProductUpdate from "../pages/Dashboard/DashboardProductUpdate/DashboardProductUpdate.tsx";

// Manage all routes
export default function Root() {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/collections',
            element: <CollectionPage />
        },
        {
            path: '/cart',
            element:<ProtectedRoute role={'CLIENT'}><CartPage/></ProtectedRoute>
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: '/signup',
            element: <SignupPage/>
        },
        {
            path:'/account',
            element: <ProtectedRoute role='CLIENT'><AccountPage/></ProtectedRoute>,
        },
        {
            path: '/admin/dashboard',
            element: <ProtectedRoute role='ADMIN'><Dashboard/></ProtectedRoute>
        },
        {
            path: '/account/details',
            element:<ProtectedRoute role={'CLIENT'}><AccountDetailsPage/></ProtectedRoute>
        },
        {
            path: '/account/change-password',
            element: <ProtectedRoute role={'CLIENT'}><AccountChangePasswordPage/></ProtectedRoute>
        },
        {
            path: '/admin/dashboard/products-management',
            element: <ProtectedRoute role={'ADMIN'}><DashboardProducts/></ProtectedRoute>
        },
        {
            path: '/admin/dashboard/products-management/product-editor-create',
            element: <ProtectedRoute role={'ADMIN'}><DashboardProductEditor/></ProtectedRoute>
        },
        {
            path: '/admin/dashboard/products-management/product-editor-update',
            element: <ProtectedRoute role={'ADMIN'}><DashboardProductUpdate/></ProtectedRoute>
        },
        {
            path:'*',
            element: <ErrorPage/>
        }
    ])

    return routes

}