import { HttpException } from '@nestjs/common';

class Response {
  Data: any;
  Message: string;
}

export function SuccesResponse(Data: any,Message: string = 'Operacion Realizada con Exito',):Response {
  return { Message,Data };
}
export function PaginatedSuccesResponse(Data: any,Message: string = 'Operacion Realizada con Exito',):Response {
  return { Message,...Data };
}
export function BadDataRequestResponse(Message: string = 'Dato no encontrado o no Existe',){
  throw new HttpException(Message, 504);
}

export function BadRequestResponse(Message: string = 'Operacion invalida',){
  throw new HttpException(Message, 504);
}
