import { Issuer } from 'openid-client';

const keycloak = async () => {
  const keycloakIssuer = await Issuer.discover(
    `https://digitalu.info/auth/realms/digital-university`
  );

  const keycloakClient = new keycloakIssuer.Client({
    client_id: 'auth-poc',
    client_secret: 'e6ca1301-00af-4533-b185-9c373a0bac87',
    redirect_uris: ['http://localhost:3000/api/login'],
    response_types: ['code'],
  });

  return keycloakClient;
};

export default keycloak;
