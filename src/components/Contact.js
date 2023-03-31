import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <div className='contact-links'>
            <h1>Contact Me</h1>
            <div>
                <a href="https://linkedin.com/in/ashley-hamilton-"> My LinkedIn</a>
            </div>

            <div>
                <a href="https://github.com/Ashhamilton28">My Github</a>
            </div>

            <div>
                <a href="mailto:AshleyHamiltonNYC@gmail.com">My Email</a>
            </div>

            <div>
                <a href="url">link text</a>
            </div>

            <FaLinkedin className='linkedinicon'  />
            <FaGithub className='githubicon' />
            <FaEnvelope className='envelopeicon' />
          
            <a href="https://github.com/Ashhamilton28"><FaGithub className='githubicon' /></a>

            <a href="mailto:AshleyHamiltonNYC@gmail.com"></a>
        </div>


        
    )
}

export default Contact