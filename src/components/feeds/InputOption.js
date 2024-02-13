import React from 'react'
import "./inputOption.css"

function InputOption({Icon, title, color}) {
  return (
    <div className='Inputoption flex'>
      <Icon style={{color:color}}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption