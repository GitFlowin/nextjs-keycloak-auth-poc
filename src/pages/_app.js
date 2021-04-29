import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/api-proxy',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
