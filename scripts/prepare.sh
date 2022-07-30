echo "{\"sha\":\"$GITHUB_SHA\", \"semantic\":\"$1\", \"docker_image\":\"$DOCKER_REPOSITORY_NAME\"}" > semantic.json
cat semantic.json
docker build -t "$DOCKER_USERNAME/$DOCKER_REPOSITORY_NAME" .