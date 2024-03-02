import { Request, Response } from "express";
import { User } from "../entity/user.entity";

export const s_create_user = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email:email} });

    if (existingUser) {
      return ("Email already exists");
    }
    else{
    const newUser = new User();

    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.password = password;

    const savedUser = await newUser.save();

    const serializedUser = {
      id: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      password:savedUser.password
    };
    return serializedUser
  }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const s_create_user = async (req: Request, res: Response) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const newUser = new User();

//     newUser.firstName = firstName;
//     newUser.lastName = lastName;
//     newUser.email = email;
//     newUser.password = password;

//     const savedUser = await newUser.save();
//     const serializedUser = {
//       id: savedUser.id,
//       firstName: savedUser.firstName,
//       lastName: savedUser.lastName,
//       email: savedUser.email,
//     };
//     return serializedUser
//   } catch (error) {
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };


export const s_all_users=async (req: Request, res: Response) => {
    return await User.find()
}

export const s_delete_user=async (req: Request, res: Response) => {
  const id:any=req.params.id
  if(id){
    const users=await User.findOne({where:{id:id}})
    if(users){
      await User.remove(users)
        res.json("user data is deleted")
    }else{
      return "user not found"
    }

  }
}


export const s_update_user=async (req:Request,res:Response)=>{
  const id:any=req.params.id
  const {firstName,lastName}=req.body
  console.log(lastName);
  
  if(!firstName && !lastName){
   return res.send("some data is missing")
    }

  else{
    await User.update({id:id},{firstName:firstName,lastName:lastName})
    return "updated"
  }

}

