# Usar una imagen base de Node.js
FROM node:18 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json desde la carpeta front
COPY front/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del frontend
COPY front/ ./

# Construir la aplicación con Vite
RUN npm run build

# --------------------
# Fase final: Servidor Nginx para producción
# --------------------
FROM nginx:alpine

# Copiar los archivos generados en la fase de build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que servirá Nginx
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


# Iniciar la aplicación usando 'serve' para servir la carpeta 'dist'
CMD ["serve", "-s", "dist", "-l", "3000"]

