import React from 'react'
import ProjectItem from './ProjectItem'
import PrincessPink from "../pics/PrincessPink.jpg"


function Projects() {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className='project-list'>
            <ProjectItem name="Hangman Game" image={PrincessPink} />
            <ProjectItem name="Hangman Game" image={PrincessPink}/>

        </div>
    </div>
  )
}

export default Projects