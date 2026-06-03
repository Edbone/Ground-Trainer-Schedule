FROM node:20-alpine

WORKDIR /app
COPY package.json server.js index.html styles.css app.js initial-scores.js aoa-logo.png ./
RUN mkdir -p /app/data

ENV PORT=3000
ENV DATA_DIR=/app/data
EXPOSE 3000
VOLUME ["/app/data"]

CMD ["npm", "start"]
