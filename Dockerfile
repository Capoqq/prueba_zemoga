FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:stable
COPY --from=node /app/dist/prueba_zemoga /usr/share/nginx/html 
