var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEBSOCKET_HOST: '"localhost"',
  WEBSOCKET_PORT: '3030'
});
