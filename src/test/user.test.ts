import { Connection, createConnection } from "typeorm";
import { Server } from "http";
import request from "supertest";
import app from "..";

let connection: Connection; 
let server: Server;

// beforeEach(async()=>{
//     connection=await createConnection();
//     await connection.synchronize(true);
//     server = app.listen(3002) as Server

// })
beforeEach(async () => {
    try {
      connection = await createConnection(/* your connection options here */);
      await connection.synchronize(true);
      server = app.listen(3002) as Server;
    } catch (error) {
      console.error("Error creating connection:", error);
    }
  });
  
// afterEach(()=>{
//     connection.close();
//     server.close();
// });
 
it("Retrive users from user",async()=>{
    const response=await request(app).get("/users/");
    // console.log(response.body)
})

