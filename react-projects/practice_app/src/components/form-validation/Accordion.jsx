import React, { useState } from 'react'

const Accordion = (data) => {
    const {firstName, lastName} = data.data;
    const { showItem, setCurrentIndex } = data;
    console.log(data);
    

    const handleClick = () => {
        setCurrentIndex()
    }

  return (
    <div className='mb-5 border-black shadow-lg'>
        <div onClick={handleClick} className='flex cursor-pointer justify-between border-black'>
            <h4>Accordion</h4>
            <span>👇</span>
        </div>
        { showItem && <div className='flex bg-slate-300 p-4'>
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>}
    </div>
  )
}

export default Accordion