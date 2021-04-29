import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import withAuth from '../components/with-auth';
import { gql, useQuery } from '@apollo/client';

const useGetAccount = () => {
  const query = gql`
    query GetAccount {
      getAccount {
        id
        firstName
        lastName
        photoUrl
        branch
        userType
        organization
        spaceDelta
        squadron
        grade
        rank
        wing
        dutyStation
        afsc
        occupationalCode
        currentCareer
        onboardingComplete
        thirdPartySiteWarning
        licenses {
          vendor
          license
        }
        activityLogs {
          id
          accountId
          description
          timestamp
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  return {
    accountLoading: loading,
    accountError: error,
    account: data?.getAccount || null,
  };
};

const Profile = ({ user }) => {
  const router = useRouter();

  const { accountLoading, accountError, account } = useGetAccount();
  console.log('useQuery: ', accountLoading, accountError, account);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <p className={styles.description}>via GraphQL</p>
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

export default withAuth(Profile);
