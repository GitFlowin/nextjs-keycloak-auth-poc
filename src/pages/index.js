import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import keycloak from '../lib/keycloak';

const Home = ({ authUrl }) => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Unauthenticated</title>
        </Head>
        <h1 className={styles.title}>Logged Out</h1>
        <button
          className={styles.card}
          onClick={e => {
            e.preventDefault();
            router.push(authUrl);
          }}
        >
          <p>Sign In</p>
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const keycloakClient = await keycloak();

  const authUrl = keycloakClient.authorizationUrl();

  return {
    props: {
      authUrl,
    },
  };
}

export default Home;
