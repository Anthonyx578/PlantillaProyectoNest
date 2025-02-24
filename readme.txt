

Proyecto Nest Base creado

*Librerias*
- Fastify
- Typeorm pg(postgres): desintalar usando npm uninstall --save typeorm
- Nestjs/TipeOrm : desintalar usando   npm uninstall --save @nestjs/typeorm pg
- Swagger: usado para la documentacion de toda la API  npm uninstall --save @nestjs/swagger

Base de datos
En la carpeta config dentro database existen un archivo llamado DataBaseConf:
Sirve para configurar el TypeOrm con los datos necesarios para conectar a las bases de datos
por medio un .env

Tiene un buscador automatico de archivos .entity.ts para que no se tengan que importar en el archivo de config



Common
Carpeta donde existen archivos de funciones o configuraciones comunes para usar en cualquier modulo

Docker
El archivo docker file contiene lo necesario para dockerizar el proyecto facil
el docker-compose contiene la directrices para el uso de servicios necesarios para este como lo puede ser 
una base de datos

Comandos 

Para generar las imagenes
docker-compose build
Para levantar los contenedores
docker-compose up
Eliminar los contonedores levantados
docker-compose down
