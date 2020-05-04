FROM cypress/included:4.5.0
COPY integration-tests-scripts /app/
WORKDIR /app
RUN npm ci
COPY projects/main-app-integrations /app/projects/main-app-integrations
COPY dist /app/dist
COPY tsconfig.json /app/
ENTRYPOINT []
