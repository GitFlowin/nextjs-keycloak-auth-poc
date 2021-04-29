import styles from '../styles/Home.module.css';
import withAuth from '../components/with-auth';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Authenticated = ({ user }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Authenticated</title>
      </Head>

      <h1 className={styles.title}>Hello {user?.name}</h1>

      <button
        className={styles.card}
        onClick={e => {
          e.preventDefault();
          router.push(`/profile`);
        }}
      >
        <p>Profile</p>
      </button>
      <button
        className={styles.card}
        onClick={e => {
          e.preventDefault();
          router.push(
            `https://digitalu.info/auth/realms/digital-university/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A3000`
          );
        }}
      >
        <p>Sign Out</p>
      </button>
    </div>
  );
};

export default withAuth(Authenticated);
