import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TicTacToe from './components/tictactoe/components/TicTacToe.jsx'
import { CommentBox } from './components/reddit-comments/CommentBox.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />,
      <Route path='game' element={<TicTacToe />} />,
      <Route path='comments' element={<CommentBox />} />,
      <Route path='*' element={<Error />} />,
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
