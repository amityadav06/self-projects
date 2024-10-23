import React, { useState } from 'react'
import './stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState({hr: 0, min: 0, sec: 0, milli: 0});
    const [status, setStatus] = useState();

    let upHr =  time.hr;
    let upMin = time.min;
    let upSec = time.sec;
    let upMilli = time.milli;

    const handleStart = () => {
        myFun();
        setStatus(setInterval(myFun, 10))
    }

    const handleStop = () => {
        clearInterval(status);
    }

    const handleReset = () => {
        clearInterval(status);
        setTime({hr: 0, min: 0, sec: 0, milli: 0})
    }

    const myFun = () => {
        if(upMilli === 100){
            upMilli = 0;
            upSec++;
        }
        if(upSec === 60){
            upSec = 0;
            upMin++;
        }
        if(upMin === 60){
            upMin = 0;
            upHr++
        }
        upMilli++;

        return setTime({hr: upHr, min: upMin, sec: upSec, milli: upMilli})
    }

  return (
    <div className='container'>
        <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.milli}</h1>
        <button className='start' onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch