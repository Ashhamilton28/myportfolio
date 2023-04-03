import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <div className='contact'>
            <h1 className='contactme'>Contact Me</h1>
            <div className='contactbox'>

                <div className='contactlge'>

                    <div className='linkedin'>
                        <a href="https://linkedin.com/in/ashley-hamilton-">
                            <FaLinkedin className='linkedinicon' />
                        </a>
                        <a href="https://linkedin.com/in/ashley-hamilton-"> My LinkedIn</a>
                    </div>

                    <div className='github'>
                        <a href="https://github.com/Ashhamilton28"><FaGithub className='githubicon' /></a>
                        <a href="https://github.com/Ashhamilton28">My Github</a>
                    </div>

                    <div className='email'>
                        <a href="mailto:AshleyHamiltonNYC@gmail.com"><FaEnvelope className='envelopeicon' /></a>
                        <a href="mailto:AshleyHamiltonNYC@gmail.com">My Email</a>
                    </div>
                </div>

                <div className='formcontainer'>
                    <h3 className='contactheading'>I'd love to hear from you!</h3>
                    <form>

                        <div className='nepst'>
                            <input type="text"
                                placeholder='Full Name'
                                name='username' required />

                            <input type="email"
                                placeholder='Email'
                                name='useremail' required />

                            <input type="text"
                                placeholder='Phone Number'
                                name='userphonenumber' required />


                            <input type="text"
                                placeholder='Subject'
                                name='subject' required />

                            <textarea placeholder="Write message here..." name='message'>

                            </textarea>

                         
                        </div>

                        <div className='buttondiv'>
                                 <button className="formbutton" type='submit'>Send Email
                        </button>
                        </div>

                      
                    </form>
                </div>

            </div>



        </div>



    )
}

export default Contact