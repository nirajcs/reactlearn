import React from 'react'

function Employee(props) {
  return (
    <div>
        <h1>Name : {props.name}, Age:{props.age}, Place:{props.place}</h1>
    </div>
  )
}

export default Employee