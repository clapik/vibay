import * as io from 'socket.io-client';
import * as feathers from 'feathers-client';

const socket = io(process.env.WEBSOCKET_HOST + ':' + process.env.WEBSOCKET_PORT);
const client = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

function install(Vue) {
  Vue.prototype.FeathersClient = client;
}

export default install;
