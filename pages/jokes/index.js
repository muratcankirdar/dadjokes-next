import {useState, useEffect} from 'react'
import axios from 'axios'
import Joke from '../../components/Joke'
import styles from '../../styles/Home.module.css'

export default function Jokes() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('https://icanhazdadjoke.com/search')
      .then(res => {
        setJokes(res.data.results)
      })
  }, []);

  return (
    <div className={styles.container}>
      {jokes.map(joke => (
        <Joke joke={joke.joke} id={joke.id} key={joke.id}/>
      ))}
    </div>
  )
}
