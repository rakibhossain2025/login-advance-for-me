import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home/Home.jsx';
import SignUp from './Components/Authintication/SignUp.jsx';
import Login from './Components/Authintication/Login.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Order from './Components/ORder/Order.jsx';
import PrivateAuth from './Private/PrivateAuth.jsx';
import Profile from './Private/Profile/Profile.jsx';
import Dashbord from './Private/Dasbord/Dashbord.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/sign-up", Component: SignUp },
      { path: "/login", Component: Login },
      { path: "/orders", element: <PrivateAuth><Order></Order></PrivateAuth> },
      { path: "/profile", element: <PrivateAuth><Profile /></PrivateAuth> },

      { path: '/dashboard', element: <PrivateAuth><Dashbord /></PrivateAuth> }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
