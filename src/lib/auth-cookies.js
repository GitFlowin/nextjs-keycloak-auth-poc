import Iron from '@hapi/iron';
import { serialize, parse } from 'cookie';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export async function setAuthCookies(res, tokenSet) {
  const encryptedAccessToken = await Iron.seal(
    tokenSet.access_token,
    TOKEN_SECRET,
    Iron.defaults
  );
  const encryptedRefreshToken = await Iron.seal(
    tokenSet.refresh_token,
    TOKEN_SECRET,
    Iron.defaults
  );
  res.setHeader('Set-Cookie', [
    serialize('encrypted_access_token', encryptedAccessToken, {
      httpOnly: true,
      path: '/',
    }),
    serialize('encrypted_refresh_token', encryptedRefreshToken, {
      httpOnly: true,
      path: '/',
    }),
    serialize('expires_at', tokenSet.expires_at, { httpOnly: true, path: '/' }),
  ]);
}

export async function getAuthCookies(req) {
  const cookie = parse(req.headers?.cookie);

  const accessToken = await Iron.unseal(
    cookie.encrypted_access_token,
    TOKEN_SECRET,
    Iron.defaults
  );

  const refreshToken = await Iron.unseal(
    cookie.encrypted_refresh_token,
    TOKEN_SECRET,
    Iron.defaults
  );

  const expiresAt = cookie.expires_at;

  return {
    accessToken,
    refreshToken,
    expiresAt,
  };
}
