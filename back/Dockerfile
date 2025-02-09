# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si existe) para instalar dependencias
COPY package*.json ./

# Instalar las dependencias de tu proyecto
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación con Vite (esto generará los archivos de producción)
RUN npm run build

# Instalar 'serve' de forma global
RUN npm install -g serve

# Exponer el puerto en el que la aplicación correrá
EXPOSE 3000

# Comando de inicio para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "3000"]
