import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import AddJobPage from './pages/AddJobPage.jsx';
import AllJobPage from './pages/AllJobPage.jsx';
import AcceptTaskPage from './pages/AcceptTaskPage.jsx';
import MyPostedJobsPage from './pages/MyPostedJobsPage.jsx';
import JobDetailsPage from './pages/JobDetailsPage.jsx';
import UpdatePage from './pages/UpdatePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element:  <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/addJob",
        element: <AddJobPage></AddJobPage>
      },
      {
        path: "/allJobs",
        element: <AllJobPage></AllJobPage>
      },
      {
        path: "/allJobs/:id",
        element: <JobDetailsPage></JobDetailsPage>,
        loader: ({params})=> fetch(`http://localhost:3000/allJobs/${params.id}`)
      },
      {
        path: "/updateJob/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({params})=> fetch(`http://localhost:3000/allJobs/${params.id}`)

      },
      {
        path: "/acceptTasks",
        element: <AcceptTaskPage></AcceptTaskPage>
      },
      {
        path: "/myPostedJobs",
        element: <MyPostedJobsPage></MyPostedJobsPage>
      },
      

    ]
  },
  
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
          <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
)
