import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <Link href='/ninjas'>
        <a className={styles.btn}>See NinjaList</a>
      </Link>
    </>
  )
}
