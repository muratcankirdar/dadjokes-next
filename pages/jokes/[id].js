import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/Home.module.css'

export default function Joke() {
  const [joke, setJoke] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const id = router.query.id

    axios.get(`https://icanhazdadjoke.com/j/${id}`).then((res) => {
      setJoke(res.data.joke)
    })
  }, [router.isReady])

  return (
    <div className={styles.container}>
      <p className={styles.joke}>{joke}</p>
    </div>
  )
}
