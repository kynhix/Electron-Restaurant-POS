const { Manager } = require("socket.io-client");

const manager = new Manager("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
  query: {
    "my-key": "my-value"
  }
});

const socket = manager.socket("/", {
  auth: {
    token: "123"
  }
});