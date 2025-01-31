# Usa una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json (si existe) al contenedor
COPY back/package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY back/ ./

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "start"]
