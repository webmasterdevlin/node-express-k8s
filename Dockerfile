FROM node:12.18.2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["node"]
CMD ["server.js"]
