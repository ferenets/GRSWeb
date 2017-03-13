import request from 'superagent';

const noop = (data, done) => done(null, data);
let jwtToken = null;


/**
 *
 * @param actions
 * @returns {*}
 */
export function createApi(actions) {
  const instance = {};

  for (const name in actions) {
    instance[name] = createRequest(actions[name]);
  }

  return instance;
}


/**
 *
 * @param token
 */
export function setJWTToken(token) {
  jwtToken = token;
}


export function reduxAction() {

}


/**
 *
 * @param opts
 * @returns {Function}
 */
function createRequest(opts) {
  const { url: baseUrl, method = 'get', validate = noop } = opts;
  const sendType = method === 'get' || method === 'header' ? 'query' : 'send';
  const urlParams = getUrlParams(baseUrl);

  return (data = null, done) => validate(data, () => {
    const url = replaceUrlParams(baseUrl, urlParams, data);
    const req = request(method, url);

    if (data) req[sendType](data);
    if (jwtToken) req.set('Authorization', `Bearer ${jwtToken}`);

    req.end((err, res) => {
      if (err) return done(res ? res.body || err : err);
      done(null, res.body);
    });
  });
}


/**
 *
 * @param url
 * @returns {{}}
 */
function getUrlParams(url) {
  const re = /:([^\/\?]+)/g;
  const params = {};
  let g;

  while ((g = re.exec(url))) {
    params[g[1]] = g[0];
  }

  return params;
}


/**
 *
 * @param url
 * @param urlParams
 * @param data
 * @returns {*}
 */
function replaceUrlParams(url, urlParams, data) {
  if (!data) return url;

  for (const key in urlParams) {
    url = url.replace(urlParams[key], data[key]);
  }

  return url;
}
