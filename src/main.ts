import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/ExceptionFilter/HttpExceptionFilter';

async function bootstrap() {
  const logger = new Logger('App');


  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());


  const config = new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: {
      tryItOutEnabled: true,
      docExpansion: true,
    },
  });


  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(Number(process.env.Port));
  logger.log(`Servicio Iniciado en http://localhost:${process.env.Port}`);
  logger.log(`Swagger Iniciado en http://localhost:${process.env.Port}/api`);
}
bootstrap();
