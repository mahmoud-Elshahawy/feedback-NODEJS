FROM node:12.13.0

WORKDIR /code

ENV PORT 5000

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["node","index.js"]