#### Dockerizing a Nodejs Express

Login to Docker Hub

```zsh
$ docker login
```

create a Nodejs Express container

```zsh
$ docker build -t {yourDockerUsername}/nodejs-express-api:1.0.0 .
```

Test the Nodejs Express container by running it. It should be visible at localhost:8080

```zsh
$ docker run -p 8080:8080 {yourDockerUsername}/nodejs-express-api:1.0.0
```

Push the container to your Docker Hub account repository

```zsh
$ docker push {yourDockerUsername}/nodejs-express:1.0.0
```
