import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoDetailPage from './Components/ViewDetailRoute/VideoDetailPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App />
  },
  {
    path: '/video/:videoId',
    element : <VideoDetailPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
