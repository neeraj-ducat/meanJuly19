//net package is imported
const net=require('net');

//TCP/IP Server is created
const server=net.createServer();

//listener is registered for 
//the connection event
server.on("connection",(socket)=>{

  console.log("connection is created.");  

  //callback to received data from the socket and
  //to send response is registered
  socket.on("data",(data)=>{
      console.log(`Client: ${data}`);
      console.log("Sending ack...");
      socket.write("Received on the server.");
  });
  //callback to stop the server when the connection
  //is closed, is registered with the socket
  socket.on("end",()=>{
    console.log("Connection is closed, stopping the server...");
     server.close();
});
});

//server is asked to listen 
//on port 5000
server.listen(5000,()=>{

    console.log("server is listening on port 5000.");
});