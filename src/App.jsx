import { useState, useEffect } from 'react'
import './App.css'
import MemeCard from './components/MemeCard'
function App() {
  const [memes, setMemes] = useState([])


  const url = "https://api.imgflip.com/get_memes"

  const fetchMemes = () => {
    fetch(url).then((res) => res.json()).then((data) => setMemes(data.data.memes)).catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchMemes()
  }, [])
  // const navigate = Object.entries(memes)[1]


  return (
    <div className="App">
      <h1>Memes</h1>
      {
        memes.length === 0
          ? 'Your request will be processed shortly ...'
          : (
            <section className='meme-wrapper'>
              {
                memes.map((meme, id) =>
                  // console.log(typeof meme)
                  <MemeCard
                    key={meme.id}
                    name={meme.name}
                    img={meme.url}
                  />)
              }
              {/* {console.log(memes)} */}
            </section>
          )
      }
    </div>
  )
}

export default App
