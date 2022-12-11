import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Artists - Main</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Artists Presentation
        </h1>
        <p className={styles.description}>
          <h3>
          At ART POINT, we aim to increase the opportunities for digital art to meet its audience, to promote artistic creation and democratize access to art. We represent more than 150 international artists with exceptional know-how and offer you the best of their work.
          </h3>
        </p>

        <p>
          <h2>
            All the Artists :
          </h2>
        </p>


        <Link href="./Banksy" className={styles.card}>
            <h2>Banksy</h2>
        </Link>

        <Link href="./Boris" className={styles.card}>
            <h2>Boris Marinin</h2>
        </Link>

        <Link href="./Katsushika" className={styles.card}>
            <h2>Katsushika Hokusai</h2>
        </Link>
        
        <Link href="./Salvador" className={styles.card}>
            <h2>Salvador Dali</h2>
        </Link>
      </main>

      <footer className={styles.footer}>
          by Uthum
      </footer>

    </div>
  )
}