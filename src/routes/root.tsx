import {useRoutes} from 'react-router-dom'
import ErrorPage from "./errorPage.tsx";
import HomePage from "../pages/Home/HomePage.tsx";
import CollectionPage from "../pages/Collection/CollectionPage.tsx";
import CartPage from "../pages/Cart/CartPage.tsx";
import LoginPage from "../pages/Login/LoginPage.tsx";
import SignupPage from "../pages/Signup/SignupPage.tsx";
import AccountPage from "../pages/Account/AccountPage.tsx";
import AccountDetailsPage from "../pages/AccountDetails/AccountDetailsPage.tsx";
import AccountChangePasswordPage from "../pages/AccountChangePassword/AccountChangePasswordPage.tsx";

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
            element: <CartPage/>
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
            element: <AccountPage userName={'Fabian'}/>,
        },
        {
            path: '/account/details',
            element: <AccountDetailsPage/>
        },
        {
            path: '/account/change-password',
            element: <AccountChangePasswordPage/>
        },
        {
            path:'*',
            element: <ErrorPage/>
        }
    ])

    return routes

}