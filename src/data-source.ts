import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plant } from "./entities/Plant";

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
    synchronize: false,
    logging: false,

    // TYPEORM Enitities 
    entities: [Plant],
});
export default appDataSource;