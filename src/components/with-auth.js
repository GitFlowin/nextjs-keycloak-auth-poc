import useSWR from 'swr';

const withAuth = WrappedComponent => {
  return context => {
    const { data, error } = useSWR('/api/auth');
    const user = data?.user;
    return <WrappedComponent user={user} />;
  };
};

export default withAuth;
