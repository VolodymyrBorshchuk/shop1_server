import { Dialect } from "sequelize";
import { registerAs } from "@nestjs/config";

export const sqlConfig = registerAs('database', () => ({
    dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABSE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true
}))