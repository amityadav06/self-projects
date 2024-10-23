import React, { useEffect, useState } from 'react'
import './traffic.css'

const TrafficLight = () => {
    const [currentLight, setCurrentLight] = useState('red');

    useEffect(() => {
        const intervals = {
            'red': 4000,
            'yellow': 500,
            'green': 6000
        }

        const switchLights = () => {
            setCurrentLight((prev) => {
                if(prev === 'red') return 'green';
                if(prev === 'green') return 'yellow';
                return 'red';
            })
        }

        const cycle = () => {
            switchLights();
            setTimeout(cycle, intervals[currentLight])
        }

        const timer = setTimeout(cycle, intervals.red);

        return () => clearTimeout(timer)

    },[currentLight])

  return (
    <div className='traffic-light'>
        <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
    </div>
  )
}

export default TrafficLight