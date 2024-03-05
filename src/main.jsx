import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Root/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import MyProvider from './MyProvider/MyProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </AuthProvider>
  </React.StrictMode>,
)