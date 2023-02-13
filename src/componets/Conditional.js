import React, { useState } from 'react'

const Conditional = () => {
    const [state,setState]= useState(false)
    // let showItem = state || 'Mern Stack'
    // let hideItem = state && 'Mevn Stack'
  return (
    <div>
        <h2> Conditional rendering</h2>
        <form action="">
            <label htmlFor="">password</label>
            <input type="password" />
            </form>
        {state && <More/>}
        <button onClick={()=> setState(!state)}>
            {/* if (state === false) {
               setState('see more')
            }else{
            setState('see less')} */}
           {state ? 'see less' : 'see more'}  </button>
   
    
    </div>
  )
}

function More() {
   return(
    <form action="">
            <label htmlFor="">username</label>
            <input type="text" />
            </form>
   ) 
}

export default Conditional