import React from 'react'
import {usestate} from 'react'
function Hooks() {
    const [count,setcount] = usestate(0)
  return (
    <div>
      {count}
      <button onClick={() =>
        setcount (count+1)}>+</button>
        <button>Add to cart</button>
        <button onClick={() =>
        setcount (count-1)}>-</button>
      
    </div>
  )
}

export default Hooks

