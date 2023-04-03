import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <p className='designedbyah'>Designed by Ashley Hamilton 2023</p>
            <p className='ashleyhamiltonnyc'>AshleyHamiltonNYC@gmail.com</p>
           
            <div className='lge'>
                <a href="https://linkedin.com/in/ashley-hamilton-">
                    <FaLinkedin className='linkedinicon' />
                </a>
                
                <a href="https://github.com/Ashhamilton28"><FaGithub className='githubicon' /></a>

            <a href="mailto:AshleyHamiltonNYC@gmail.com"><FaEnvelope className='envelopeicon' /></a>
            </div>
        </div>
    )
}

export default Footer