# base image
FROM node:12.2.0-alpine as dep
WORKDIR /usr/src/app

COPY package.json ./

RUN rm -rf package-lock.json && \
    npm install @material-ui/core -g && \
    npm install 

FROM dep as build
COPY . ./
RUN npm run build

FROM nginx:1.16.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/build /var/www
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]


