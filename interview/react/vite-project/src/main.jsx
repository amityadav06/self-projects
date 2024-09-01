import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import ProductsPage from './pages/Products.jsx'
import DashboardPage from './pages/dashboard.jsx'
import OffersPage from './pages/Offers.jsx'
import BookingsPage from './pages/bookings.jsx'
import HotelsPage from './pages/hotels.jsx'
import ReduxPage from './pages/redux.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import LoginPage from './pages/login.jsx'
import ProtectedRoute from './pages/protected-route.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='offers' element={<OffersPage />} />
        <Route path='bookings' element={<BookingsPage />} />
        <Route path='hotels' element={<HotelsPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='redux' element={<ReduxPage />} />
        </Route>
        <Route path='login' element={<LoginPage  />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
