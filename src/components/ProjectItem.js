import React from 'react'

import { useNavigate } from 'react-router-dom'

//useNavigate to be able to click on each individual project page. can put in event handlers

function ProjectItem({image, name, id}) {
  const navigate = useNavigate()
  return (
    <div className='projectItem' 
    onClick={() =>{
      navigate("/project/" + id)
    }} 
    >
        <div style={{ backgroundImage: 'url(${image})'}} className="backgroundImage" />
        <h1>{name}</h1>
       <img src={image} alt={name}/>
    </div>
  )
}

export default ProjectItem