import React from 'react'

function ProjectItem({image, name}) {
  return (
    <div className='a-project'>
        <div style={{backgroundImage: 'url(${image})'}} className="backgroundImage"></div>
        <h1>{name}</h1>
       <img src={image} alt={name}/>
    </div>
  )
}

export default ProjectItem