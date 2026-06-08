import { Socket } from "socket.io-client";
const io = new Socket("http://localhost:8080");

io.on("connect", () => {
  console.log("Connected to server");
});