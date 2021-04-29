import axios from 'axios';
import { getAuthCookies } from '../../lib/auth-cookies';
import { createProxyMiddleware } from 'http-proxy-middleware';

// export default async (req, res) => {
//   const cookies = await getAuthCookies(req);

//   const url = 'https://du-dev-101.uc.r.appspot.com/';

//   const response = await axios({
//     url,
//     method: 'post',
//     data: { query: `${req.body.query}` },
//     headers: {
//       Authorization: `Bearer ${cookies.accessToken}`,
//     },
//   });
//   //   console.log(response.data.data);
//   res.send(response.data);
//   //   res.status(200).send(response.data.data);
// };

const proxy = createProxyMiddleware({
  target: 'http://du-dev-101.uc.r.appspot.com/',
});

export default proxy;
