/*
 * @Author: pony@diynova.com
 * @Date: 2022-02-16 11:19:08
 * @LastEditors: pony@diynova.com
 * @LastEditTime: 2022-02-16 18:48:44
 * @FilePath: /movie/src/pages/index.tsx
 * @Description: Home page
 */
import Navigation from 'components/Navigation'
import Head from 'next/head'
import styles from 'theme/Home.module.scss'

export default Home

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie DAO</title>
        <meta name="description" content="movie dao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
}

function Main() {
  return <main className={styles.main}>body</main>
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>
}
