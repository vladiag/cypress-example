docker build -t integrations -f integration-tests-ci.Dockerfile .
docker run --rm -v $PWD/projects/main-app-integrations/src:/app/projects/main-app-integrations/src integrations:latest npm run main-app:integrations
