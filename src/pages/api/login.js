import keycloak from '../../lib/keycloak';
import { setAuthCookies } from '../../lib/auth-cookies';

/**
 * Once a user signs into Keycloak, we are redirected to this API route
 * We will generate the tokenSet, encrypt it and save into an httpOnly cookie
 * Finally we direct users back to the /authenticated page (the landing page for an authenticated user).
 */
export default async (req, res) => {
  const keycloakClient = await keycloak();

  const tokenSet = await keycloakClient.callback(
    'http://localhost:3000/api/login',
    req.query
  );

  await setAuthCookies(res, tokenSet);
  res.redirect(`http://localhost:3000/authenticated`);
};
