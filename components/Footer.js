import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='https://icanhazdadjoke.com/api'>Made with Dad Jokes API</Link>
    </footer>
  )
}

export default Footer
