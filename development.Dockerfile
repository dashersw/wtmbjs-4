FROM node:alpine

WORKDIR /app
VOLUME /app

RUN npm install -g nodemon

ADD package.json package-lock.json ./
RUN npm install

CMD ["nodemon"]
