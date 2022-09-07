import { io } from "socket.io-client";

const socket =io("https:://localhost:4545/")

export {socket}