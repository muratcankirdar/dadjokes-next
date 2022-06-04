import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = ({children}) => {
  return (
    <div>
      <div className={styles.navbar}>
        <h2><Link href='/'>Dad Jokes</Link></h2>

        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/jokes'>Jokes</Link></li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default Navbar
