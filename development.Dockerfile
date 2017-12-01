FROM node:alpine

WORKDIR /app
VOLUME /app/src

RUN npm install -g nodemon

ADD package.json package-lock.json ./
RUN npm install

CMD ["nodemon", "src"]
