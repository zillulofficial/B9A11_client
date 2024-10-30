import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AboutUsDetails from './Pages/AboutUsDetails/AboutUsDetails';
import AddJobPage from './Pages/AddJobPage/AddJobPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
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
        path:'/aboutUs',
        element:<AboutUsDetails></AboutUsDetails>
      },
      {
        path:'/addJob',
        element:<AddJobPage></AddJobPage>
      }
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
