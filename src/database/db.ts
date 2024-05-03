import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
//ManikantaPatel PrashanthPatel VivekPatel EleandharPatel ManaswiniPatel ManishaPatel
 const userDatabase=  new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mani@2805",
    database: "test_db",
    entities: [User], 
    logging: true,
    synchronize: true,
    // define: {
        charset: 'utf8mb4',
    // },
})

export default userDatabase
