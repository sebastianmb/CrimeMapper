# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si existe) desde la carpeta front
COPY front/package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código del front al contenedor
COPY front/ ./

# Construir la aplicación con Vite (esto generará los archivos de producción)
RUN npm run build

# Instalar y usar 'serve' para servir los archivos estáticos
RUN npm install -g serve

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar el servidor
CMD ["serve", "-s", "dist"]

