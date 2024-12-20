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
import UpdateJobPage from './Pages/UpdateJobPage/UpdateJobPage';
import AppliedJobPage from './Pages/AppliedJobPage/AppliedJobPage';
import AllJobsPage from './Pages/AllJobsPage/AllJobsPage';
import Blogs from './Pages/Blogs/Blogs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
        path: '/aboutUs',
        element: <AboutUsDetails></AboutUsDetails>
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJobPage></AddJobPage></PrivateRoute>
      },
      {
        path: '/myJobs',
        element: <PrivateRoute><MyJobPage></MyJobPage></PrivateRoute>
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute><AppliedJobPage></AppliedJobPage></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateJobPage></UpdateJobPage></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><ViewJobDetails></ViewJobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/contactUs',
        element: <Contacts></Contacts>
      },
      {
        path: '/allJobs',
        element: <AllJobsPage></AllJobsPage>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
