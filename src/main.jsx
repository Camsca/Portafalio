import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Portfolio from './components/pages/Portafolio.jsx';
import Resume from './components/pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: < About />,
      },
      {
        path: 'About',
        element: <About/>,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
