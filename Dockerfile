# base image
FROM node:21-alpine 

RUN mkdir -p /agri/app/

WORKDIR /agri/app


COPY ./ ./

RUN npm install
RUN npm run build
EXPOSE 8000

CMD [ "npm", "start" ]