import styles from '../styles/Joke.module.css'

export default function Joke({ joke, id }) {
  return (
    <a href={`/jokes/${id}`}>
      <div>
        <p className={styles.joke}>{joke}</p>
      </div>
    </a>
  )
}
