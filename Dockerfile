FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:stable
COPY --from=node ./app/dist/zemogaPrueba /usr/share/nginx/html 
COPY ./ngx-custom.conf /etc/nginx/conf.d/default.conf