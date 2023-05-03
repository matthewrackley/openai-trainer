const { gen } = require('./hashGen.js');

function elements (method) {
  if (method !== 'css' && method !== 'script') {
    return;
  }
  if (method === 'css') {
    const css = gen.sec.value('css');
    document.createAttribute('nonce').value = css;
    document.querySelectorAll('link[href]')
      .forEach((el) => {
        el.setAttribute('nonce', css);
      });
    return css;
  }
  if (method === 'script') {
    const script = gen.sec.value('script');
    const scriptNonce = document.createAttribute('nonce').value = script;
    document.querySelectorAll('*[nonce]:not(link[href])')
      .forEach((el) => {
        el.setAttribute('nonce', script);
      });
    return scriptNonce;
  };
};
const headers = {
  http: 'http-equiv',
  cspV: 'Content-Security-Policy',
  content: 'content',
  source: `default-src 'self'; style-src fonts.gstatic.com fonts.googleapis.com 'self' 'unsafe-inline' 'nonce-${ elements('css')
    }'; font-src fonts.gstatic.com fonts.googleapis.com; script-src 'self' 'nonce - ${ elements('script') } ' 'strict - dynamic';`,
  xAttr: 'Content-Type-Options',
  xAttrV: `text/html; nosniff;`,
  cookie: 'Set-Cookie',
  cookieV: gen.sec.value('cookie'),
};
const csp = {
  id: document.getElementById('CSP'),
  set: (attr, data) => {
    csp.id.setAttribute(attr, data);
  },
  apply: {
    basic: () => {
      document.cookie = `basicTracker=${ encodeURIComponent(gen.sec.key('hmac', 'UserTracker')) }; HttpOnly; SameSite=lax; Secure;`;
      csp.set(headers.http, headers.cspV);
      csp.set(headers.content, headers.source);
      csp.set(headers.xAttr, headers.xAttrV);
    },
  }
};

module.exports = { csp, headers };
