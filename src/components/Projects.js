import React from 'react'
import ProjectItem from './ProjectItem'
import  ProjectList from './ProjectList'


function Projects() {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
        

{/* loop through project list */}
            {ProjectList.map((project, idx) => {
              return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
              )
            })}

        </div>
    </div>
  )
}

export default Projects