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
import Contacts from './Pages/ContactUs/Contacts';
import ViewJobDetails from './Pages/ViewJobDetails/ViewJobDetails';
import PrivateRoute from './Routes/PrivateRoute';
import MyJobPage from './Pages/MyJobPage/MyJobPage';

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
        element:<PrivateRoute><AddJobPage></AddJobPage></PrivateRoute>
      },
      {
        path:'/myPostedJobs',
        element:<PrivateRoute><MyJobPage></MyJobPage></PrivateRoute>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><ViewJobDetails></ViewJobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/contactUs',
        element: <Contacts></Contacts>
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
