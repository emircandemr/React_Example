import React from 'react'

function Budget() {
  return (
    <div className='alert alert-secondary p-4 fw-bold'>
        <span> Budget : $2000 </span>    
        <button className='btn btn-primary p-0 px-1 float-end' onClick={() => {
        }}> Edit </button>
    </div>
  )
}

export default Budget