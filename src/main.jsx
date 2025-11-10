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
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }
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
