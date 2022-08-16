import React from 'react'
import { useState } from 'react'


function Counter() {
  const [count,setCount] = useState(0)
  
    return (
    <div>
        <div className='count'> {count}</div>
        <button className='btnCount' onClick={() => setCount(count - 1)} >Decrease</button>
        <button className='btnCount' onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter