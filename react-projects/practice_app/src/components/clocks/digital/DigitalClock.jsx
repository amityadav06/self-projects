import React, { useState } from 'react'

const DigitalClock = () => {
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString())

    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime, 1000)

  return (
    <div>
        <h1 className='text-3xl'>React Digital Clock</h1>
        <h1 className='text-6xl'>{ctime}</h1>
    </div>
  )
}

export default DigitalClock