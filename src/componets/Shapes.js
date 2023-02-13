import React, { useState } from 'react'
import {FaMoon} from 'react-icons/fa'
import{BiSun} from 'react-icons/bi'
const Shapes = () => {
    const [lightMode,setLightMode] = useState(true)

  return (
    <div>
      <h2>toggling shapes with css</h2>
      <div className={lightMode ? 'lightMode' : 'darkMode'}>
        <button onClick={()=>(setLightMode(!lightMode))}>{lightMode ? <FaMoon/>:<BiSun/>}</button>
        <h3>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aut voluptas ab blanditiis velit non iusto in quaerat quibusdam officiis odio fugiat assumenda id perferendis accusantium asperiores placeat reiciendis, ducimus harum ex? Ab debitis, quod incidunt, perferendis a, praesentium obcaecati repellendus sed vitae distinctio ipsam? Velit, voluptatum fuga, dolores numquam consequatur eius corrupti amet dolorem, voluptate quaerat at nisi. Ipsa quia repellat ex totam atque accusamus necessitatibus? Illum laborum deleniti error vero ut! Aut quod odio dicta tempora debitis consequuntur sint voluptatum molestias exercitationem impedit porro, maiores culpa cumque aspernatur reprehenderit placeat, recusandae nesciunt animi! Libero voluptate ea nisi nihil.
        </h3>
        
        </div>  
    </div>
  )
}

export default Shapes