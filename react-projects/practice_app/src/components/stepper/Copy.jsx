import React, { useState } from 'react'
import './copy.css'

const Copy = () => {
    const [currentActive, setCurrentActive] = useState(0)
    const [complete, setComplete] = useState(false)

    const handleDecrement = () => {
        if(currentActive <= 0){
            setCurrentActive(0)
        }else{
            setCurrentActive((currentActive) => currentActive - 1)
        }
    }
    
    const handleIncrement = () => {
        if(currentActive >= 3){
            setCurrentActive(3)
            setComplete(true)
        }else{
            setCurrentActive((currentActive) => currentActive + 1)
        }
    }

  return (
    <div>
        <div className="outer flex w-[500px]">
                {
                    [...Array(4).keys()].map((_, index) => {
                        return(
                            <div className="cont">
                                <section className='flex w-[150px] cont items-center justify-between'>
                                    <div 
                                        className={`step ${currentActive >= index ? 'active' : ''} bg-gray-400`} 
                                        key={index}
                                    >
                                        {index + 1}
                                    </div>
                                </section>
                                <div className={`line ${currentActive > index ? 'complete' : ''}`}></div>
                            </div>
                        )
                    })
                }
        </div>
        <section className="mt-6 bg-slate-300 h-24 flex items-center justify-center">
            {currentActive === 0 && <h1>Component 1</h1>}
            {currentActive === 1 && <h1>Component 2</h1>}
            {currentActive === 2 && <h1>Component 3</h1>}
            {currentActive === 3 && <h1>Component 4</h1>}
        </section>
        <section className='flex justify-between mt-10'>
            <button onClick={handleDecrement} className='btn'>Previous</button>
            <button onClick={handleIncrement} className='btn'>Next</button>
        </section>
    </div>
  )
}

export default Copy