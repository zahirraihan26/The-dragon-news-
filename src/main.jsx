import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routs/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import BookmarkProvider from './Provider/BookmarkProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <BookmarkProvider>
          <RouterProvider router={router}></RouterProvider>
        </BookmarkProvider>
    </AuthProvider>
  </StrictMode>,
)
