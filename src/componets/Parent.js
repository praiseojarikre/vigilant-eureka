import React, { useState } from 'react'
import { people } from './db'
import Props from './Props'

const Parent = () => {
const [person]=useState(people)

  return (
    <div>
        <h2>Parent componet</h2>
        {person.map((person)=>{
            const{name,job,id} = person
            return(
                <div key={id}>
                    <h2>{name}</h2>
                    <p>{job}</p>
                </div>
            )
        })}

        <Props taiwo={person} title='Mr Bankole' age={100}/>
    </div>
  )
}

export default Parent