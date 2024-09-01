import { useContext, useEffect } from 'react';
import './App.css'
import useRefreshToken from './hooks/useRefreshToken.jsx';
import { TokenContext } from './context/TokenContext';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useRefreshToken();
    return (
      <div className="container min-h-screen">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    )
  }

export default App
