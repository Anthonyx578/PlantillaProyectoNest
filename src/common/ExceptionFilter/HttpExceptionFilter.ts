import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const status = exception.getStatus();
        const Log = new Logger('Exception Filter')
        
        if(exception.status === 508)
        response.status(504).send(
            {
                status:504,
                error:'Error de datos',
                message: exception.message
            }
        )
        else{
            Log.log(exception)
            response.status(exception.status).send({
                status:exception.status,
                error:exception.error,
                message: exception.message
            })
        }
    }
}