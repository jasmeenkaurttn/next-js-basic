import Link from 'next/link'
import React from 'react' 
import styles from '../styles/Home.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href='/'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/album'><a>Gallery</a></Link>
      <Link href='/post'><a>Blog</a></Link>
      <Link href='/contact'><a>Contact</a></Link>
    </div>
  )
}

export default Navbar
