const {Server} = require("socket.io");

const io = new Server({
  // options
});

io.on("connection", (socket) => {
  console.log("made a new connection.");

  socket.on("disconnect", (reason) => {
    console.log("user disconnected: " + reason);
  });
});

io.listen(3000);

// Account Manager