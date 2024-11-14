import React, { useState } from 'react'

export const Counter = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
        <p>count is : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
