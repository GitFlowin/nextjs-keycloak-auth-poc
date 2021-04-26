import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Issuer } from 'openid-client';

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
  const keycloakIssuer = await Issuer.discover(
    `https://digitalu.info/auth/realms/digital-university`
  );

  const keycloakClient = new keycloakIssuer.Client({
    client_id: 'auth-poc',
    redirect_uris: ['http://localhost:3000/'],
    response_types: ['code'],
  });

  const authUrl = keycloakClient.authorizationUrl();
  console.log(authUrl);

  return {
    props: {
      authUrl,
    },
  };
}

export default Home;
