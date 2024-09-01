import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <>
      <div>
        <Header />
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <img className='invisible' src='/' alt='/' /> 
          <main>
            <Hero />
          </main>
      </div>
    </>
  )
}

export default App
