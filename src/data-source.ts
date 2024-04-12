import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plant } from "./entities/Plant";
import { User } from "./entities/User";

dotenv.config({path: ".env.local"});

const appDataSource = new DataSource({

    //Database connection
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Connection params
    synchronize: true,

    // TYPEORM Enitities 
    entities: [Plant, User],
});
export default appDataSource;