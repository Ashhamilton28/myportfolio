import React from 'react'
import { useParams } from "react-router-dom"
import ProjectList from './ProjectList'

function ProjectDisplay() {
    const{ id } = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img className="projectImages" src={project.image} />
    </div>
  )
}

export default ProjectDisplay