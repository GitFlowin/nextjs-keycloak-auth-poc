import keycloak from '../../lib/keycloak';
import { getAuthCookies, setAuthCookies } from '../../lib/auth-cookies';

export default async (req, res) => {
  const keycloakClient = await keycloak();

  let authCookies = await getAuthCookies(req);

  try {
    let tokenSet;
    // Access token has expired, request a new tokenSet using the refresh token
    if (Date.now() / 1000 <= authCookies.expiresAt) {
      tokenSet = await keycloakClient.refresh(authCookies.refreshToken);
    }
    // Set the new tokenSet to client's cookie
    await setAuthCookies(res, tokenSet);

    authCookies = await getAuthCookies(req);
    // Get current user info using access token
    const user = await keycloakClient.userinfo(authCookies.accessToken);

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).end('Authentication token is invalid, please log in');
  }
};
