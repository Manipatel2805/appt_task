import express  from "express";
export const user_route=express.Router();
//DEVARAAAAAAAAAAA
//NTRRRRRRRRRRRR
import { all_users, create_users, delete_user, update_user } from "../controller/user_controller";

user_route.get("/",all_users)
user_route.post("/",create_users)
user_route.delete("/:id",delete_user)
user_route.put("/:id",update_user)




