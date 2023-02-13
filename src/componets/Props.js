import React from 'react'
// import { people } from './db'

const Props = ({taiwo,title,age}) => {
  return (
    <div>
        <h2>{title} is {age} years old</h2>
        <h3>child componet</h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate nulla ea placeat facilis culpa, tempora soluta molestias accusantium eum voluptates enim exercitationem eos numquam eius pariatur fugit, provident magni quibusdam dicta ducimus. Reiciendis iste obcaecati in repellendus molestiae vitae? Numquam nobis iure, deserunt praesentium id error dignissimos minima nisi?</h4> 

        {taiwo.map((praise)=>{
            return(
                <div >
                    <h2>{praise.name}</h2>
                </div>
            )
        }

        )}
        </div>
  )                                               
}

export default Props