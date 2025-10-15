import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './routes/AppLayout.tsx'
import Home from './routes/Home.tsx'
import Services from './routes/Services.tsx'
import WhoWeServe from './routes/WhoWeServe.tsx'
import About from './routes/About.tsx'
import Contact from './routes/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'who-we-serve', element: <WhoWeServe /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
