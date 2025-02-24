FROM node:20.18-alpine
WORKDIR /SystemDirName
# --------------------------------Copiado de Archivos ------------------------------------------
# Si se quiere usar desarrollo el de arriba si es produccion el de abajo
#COPY . /SystemDirName
#COPY dist package.json package-lock.json tsconfig.json tsconfig.build.json /SystemDirName
# --------------------------------Copiado de Archivos ------------------------------------------

#Puerto que se quiere exponer en el contenedor
EXPOSE 3009
# --------------------------------INSTALACION ------------------------------------------
#Ejecutar un Client Install solamente
#RUN npm ci
#Ejecutar una instalacion completa
#RUN npm install
# --------------------------------INSTALACION ------------------------------------------
# --------------------------------Ejecucion ------------------------------------------
#Si es como desarrollo
#CMD [ "npm","run","start:dev" ]

#Si es como produccion
#CMD [ "npm","run","start" ]
# --------------------------------Ejecucion ------------------------------------------

