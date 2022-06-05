import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/jokes">Dad Jokes</Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
