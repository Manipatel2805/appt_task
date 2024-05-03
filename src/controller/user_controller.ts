import { Request,Response } from "express"
import { s_all_users, s_create_user, s_delete_user, s_update_user } from "../usersdata/user.data"

//ManikantaPatel PrashanthPatel VivekPatel EleandharPatel ManaswiniPatel ManishaPatel
//ManikantaPatel PrashanthPatel VivekPatel EleandharPatel ManaswiniPatel ManishaPatel
export const all_users=async (req:Request,res:Response)=>{

    const result=await s_all_users(req,res)
    res.json(result)
}

export const create_users=async (req:Request,res:Response)=>{

    const result=await s_create_user(req,res)
    res.json(result)
}

export const delete_user=async (req:Request,res:Response)=>{

    const result=await s_delete_user(req,res)
    res.json(result)
}

export const update_user=async (req:Request,res:Response)=>{

    const result=await s_update_user(req,res)
    
    res.json("user data updated")
}