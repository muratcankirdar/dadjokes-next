import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href='/jokes'>Dad Jokes</Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>
          Made with Dad Jokes API
        </p>
      </footer>
    </div>
  )
}

export default Home
