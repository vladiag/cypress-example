FROM cypress/included:4.5.0

COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app

RUN npm ci

COPY / /app/

ENTRYPOINT []
