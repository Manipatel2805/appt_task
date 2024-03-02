import express from "express"
import { user_route } from "./routes/user_route"
import userDatabase from "./database/db"


const app=express();

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("hi iam server")
})

app.use("/users",user_route)
app.listen(3002,()=>{
    console.log("Success")
})
// userDatabase.initialize()
// .then(() => {
//     console.log("Database connected!")
// })
// .catch((err)=>{
//     console.error("Error during Data Source initialization:",err)
// });

export default app;