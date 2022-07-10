#stage 1
FROM node:latest as node
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/angular-devops /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80





