FROM node:17-alpine

RUN mkdir -p /tech-time/
WORKDIR /tech-time/

COPY package*.json ./


RUN npm install

COPY . /tech-time/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]