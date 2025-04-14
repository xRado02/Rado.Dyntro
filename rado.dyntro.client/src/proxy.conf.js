const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7209';

const PROXY_CONFIG = [
  {
    context: [
      "/api/order",
      "/api/Order/orderFilteredBy",
      "/api/order/delete",
      "/api/user",
      "/api/user/delete-multiple",
      "/api/Auth/login",
      "/api/Auth/register",
      "/api/Auth/refresh-token"
    ],
    target: target, 
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;

