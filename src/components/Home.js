
import Axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
  const [quote, setQuote] = useState(null)


const config = {
  headers: {
    "X-Api-Key": "rfqdIdx98GUQTd1UPsUeCg==55ya0tGQnhSzo6NX"
  }
}
    //the quote api
  const getQuote = () =>{
    Axios.get("https://api.api-ninjas.com/v1/quotes?category=success", config).then((response)=>{
      console.log(response.data)
      setQuote(response.data[0])
    })
  }
//end of quote api

useEffect(()=>{
  getQuote()
},[])

  return (
    <div className='home'>
      <h1>Hello World.</h1>
      <p>My name is Ashley Hamilton. I am a Software Engineer from NYC. I love art, creativity and gallivanting. </p>




       {/* quote api button */}
       <div>
        <button onClick={getQuote}>Get Quote</button>

        {/* render the quote */}
       { quote &&<p>{quote.quote}</p>}
      </div>

    </div>
  )
}

export default Home