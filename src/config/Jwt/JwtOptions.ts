import { JwtModuleOptions } from '@nestjs/jwt'
import * as dotenv from 'dotenv'

dotenv.config()

export const JwtOptions:JwtModuleOptions ={
    //si se quiere hacer global sin necesidad de importar en cada modulo que se vaya a usar
    global:true,
    privateKey: process.env.secret ?? "Secreto",
    signOptions:{
        expiresIn:"1h"
    }
} 