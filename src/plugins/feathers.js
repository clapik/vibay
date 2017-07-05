import * as io from 'socket.io-client';
import * as feathers from 'feathers-client';
import hooks from 'feathers-hooks';

const server = io(process.env.WEBSOCKET_HOST + ':' + process.env.WEBSOCKET_PORT);
const client = feathers()
  .configure(feathers.socketio(server))
  .configure(hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

function install(Vue) {
  Vue.prototype.FeathersClient = client;
}

export default install;
