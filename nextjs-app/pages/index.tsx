import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our Next.js App
        </h1>

        <p className={styles.description}>
          Subscribe to our newsletter
        </p>

        <EmailForm />
      </main>

      <Footer />
    </div>
  )
}

export default Home;