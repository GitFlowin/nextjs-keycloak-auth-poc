import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Authenticated = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authenticated</title>
      </Head>

      <h1 className={styles.title}>Logged In</h1>

      <button href="https://nextjs.org/docs" className={styles.card}>
        <p>Sign Out</p>
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  // const keycloak = new Keycloak({
  //   url: 'https://digitalu.info/auth/',
  //   realm: 'digital-university',
  //   clientId: 'auth-poc',
  // });

  // keycloak.init({
  //   onLoad: 'login-required',
  // });

  return {
    props: {
      // keycloak,
    },
  };
}

export default Authenticated;
