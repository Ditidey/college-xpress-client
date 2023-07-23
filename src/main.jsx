import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/route/Route.jsx';
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
