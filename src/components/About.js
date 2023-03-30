import React from 'react'
import PrincessPink from '../pics/PrincessPink.jpg'
import "../App.css"


function About() {
  return (
    <div className='about'>

      <div>
     <img className='princesspink' src={PrincessPink} />
       
       
      </div>
      <h2>Hello. My name is Ashley.</h2>
      <p>I am a creative, fun and empathetic professional, trained in a Boot camp setting the principles of Software Engineering. I am a smart and driven individual with the ability to work well in a diverse workplace while managing various responsibilities in a deadline driven environment. I have exceptional soft skills along with delegation and leadership qualities. I enjoys learning, analyzing and exercising new concepts in the  tech sector.</p>


      <div className='skills'>
        <h1>Skills</h1>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>React</span>
      </div>
    </div>
  )
}

export default About