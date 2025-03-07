import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/ExceptionFilter/HttpExceptionFilter';
import { PipesConsumer } from '@nestjs/core/pipes';

async function bootstrap() {
  const logger = new Logger('App');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      //Solo permite cosas que esten validadas en los dts con el class validator
      whitelist: true,
      //Salta una excepcion cuando encuentra algo o existe algo de mas en el body de la peticion
      forbidNonWhitelisted: true,
      //Transforma lo que viene en la peticion en instancia de clase directamente
      transform: true,
    }),
  );

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

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(Number(process.env.Port));
  logger.log(`Servicio Iniciado en http://localhost:${process.env.Port}`);
  logger.log(`Swagger Iniciado en http://localhost:${process.env.Port}/api`);
}
bootstrap();
