import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Authenticated = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authenticated</title>
      </Head>

      <h1 className={styles.title}>Logged In 😊</h1>

      <button href="https://nextjs.org/docs" className={styles.card}>
        <p>Sign Out</p>
      </button>
    </div>
  );
};

export default Authenticated;
