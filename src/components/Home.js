
import Axios from 'axios'
import { useEffect, useState } from 'react'
import PrincessPink from '../pics/PrincessPink.jpg'
import Footer from './Footer';

function Home() {
  const [quote, setQuote] = useState(null)


  const config = {
    headers: {
      "X-Api-Key": "rfqdIdx98GUQTd1UPsUeCg==55ya0tGQnhSzo6NX"
    }
  }
  //the quote api
  const getQuote = () => {
    Axios.get("	https://api.adviceslip.com/advice").then((response) => {
      console.log(response.data.slip.advice)
      setQuote(response.data.slip.advice)
    })
  }
  //end of quote api

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <>
      <div className='everything'>


      <div className='home'>
        <div className="hwiam">
          <h1 className='hw'>Hello World. I am Ashley...</h1>
          <p className='iam'>A Software Engineer from NYC. I love art, creativity and Me. </p>
        </div>

        

        <img className='princesspink' src={PrincessPink} />


      </div>
      <section className='bottomportion'>
        <div className='about'>
         <div className='quoteandskills'>

         <div className='quotediv'>
            <h2 className='advice'>Advice of the day:</h2>
            <p className="quote-paragraph">{quote}</p>
           
            <button className="advicebutton" onClick={getQuote}>Get Advice</button>
          </div>

          <div className='skills'>
          <h1 className='skillsheading'>Skills:</h1>
            <span className='skillspan'>HTML</span>
            <span className='skillspan'>CSS</span>
            <span className='skillspan'>Javascript</span>
            <span className='skillspan'>React</span>
          </div>
         </div>

          <p className='aboutparagraph'>I am a creative, fun and empathetic professional, trained in a Boot camp setting the principles of Software Engineering. I am a smart and driven individual with the ability to work well in a diverse workplace while managing various responsibilities in a deadline driven environment. I have exceptional soft skills along with delegation and leadership qualities. I enjoys learning, analyzing and exercising new concepts in the  tech sector.</p>

        
         
        </div>
      </section>

      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home