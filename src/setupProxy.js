const { createProxyMiddleware } = require('http-proxy-middleware');
const targetHost = 'http://192.168.1.197:5000/';
// "http://192.168.1.197:5000/"
// "http://192.168.1.193:6688/"
// "http://yapi.imsightmed.com/mock/57"

module.exports = function (app) {
  app.use(
    '/app',
    createProxyMiddleware({
      target: targetHost,
      changeOrigin: true
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://192.168.1.243",
      changeOrigin: true
    })
  );
  // app.use(createProxyMiddleware('/api', { target: 'http://192.168.1.243' }));
};
