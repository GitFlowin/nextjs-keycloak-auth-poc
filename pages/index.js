import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unauthenticated</title>
      </Head>

      <h1 className={styles.title}>Logged Out 😳</h1>

      <button
        href="https://nextjs.org/docs"
        className={styles.card}
        onClick={() => {
          console.log('Clicked to Sign In');
        }}
      >
        <p>Sign In</p>
      </button>
    </div>
  );
}
