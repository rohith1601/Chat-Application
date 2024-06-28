const express=require("express");
const http=require("http");
const cors=require("cors");
const socketio=require("socket.io")
const router=require("./router")

const PORT=1111;

const app=express();
app.use(cors());
app.use(router)

const server=http.createServer(app);
const io=socketio(server);

io.on("connection", (socket)=>{
    console.log("New connection established");
    socket.on("disconnect", ()=>{
        console.log("Connection disconnected");
    })
}
)

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


