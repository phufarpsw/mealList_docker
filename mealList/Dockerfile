FROM node:16-alpine

WORKDIR /react-vite-app

EXPOSE 4000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]
