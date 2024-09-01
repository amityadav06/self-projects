import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import LinkPage from './pages/link'
import Redirect from './pages/redirect'
import UrlProvider from './context'
import RequiredAuth from './components/require-auth'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element:( 
        <RequiredAuth>
          <Dashboard />
        </RequiredAuth>)
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/link/:id',
        element: (
          <RequiredAuth>
            <LinkPage />
          </RequiredAuth>
        )
      },
      {
        path: '/:id',
        element: <Redirect />
      },
    ]
  }
])

function App() {

  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>

  )
}

export default App
