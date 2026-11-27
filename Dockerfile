FROM node:16-bullseye
WORKDIR /app
COPY app.js .
CMD ["node", "app.js"]
