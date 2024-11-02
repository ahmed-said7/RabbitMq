FROM node:21
WORKDIR /consumer-3
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm","run","start:dev"]