import { TypeORMError } from "typeorm"
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
export const DbConfig:TypeOrmModuleOptions ={
    host: process.env.DbHost,
    database: process.env.DbName,
    password: process.env.DbPassword,
    username: process.env.DbUserName
}
