const {Server} = require("socket.io");

const io = new Server({
  // options
});

io.on("connection", (socket) => {
  console.log("made a new connection.")
});

io.listen(3000);