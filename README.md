# Tech Time

A web application for an online tutoring platform. This project is built using Next.j, TailwindCSS and docker.

## Getting Started

To build the Docker image, make sure Docker is installed on your system, navigate to the root directory of the project (where the docker-compose.yml file is located), and run the following command in your terminal:

```
docker-compose build
```

## Running the Container

Once the Docker image has been built, you can start the container by running the following command:

```
docker-compose up
```

This will start the container and launch the Tech Time web application. You should be able to access the application by opening your web browser and navigating to http://localhost:3000.

## Stopping the Container

To stop the running container, run the following command:

```
docker-compose down
```

This will stop and remove the running container.

## Troubleshooting

If you encounter any issues with building or running the container, try removing the existing Docker images and containers associated with this project by running the following command:

```
docker system prune -a
```
