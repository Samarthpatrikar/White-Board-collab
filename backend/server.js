const express=require('express');
const app=express();

const server=require('http').createServer(app);
const {Server}=require('socket.io');

const io=new Server(server);
const PORT=process.env.PORT||9000;

app.get('/',(req,res)=>{
    res.send('Hi')
})

io.on('connection',(socket)=>{
    console.log(`user with id ${socket.id} connected..`)
});

server.listen(9000,()=>{console.log('Server has started..')})
