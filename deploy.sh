#!/bin/bash

echo "Shutdown docker container ...\n"
{
    sudo docker-compose -f docker-compose.yml down && echo "Rebuild docker container ...\n" && sudo docker-compose -f docker-compose.yml up --build -d
} || {
    echo "Rebuild docker container  ...\n" && sudo docker-compose -f docker-compose.yml build && sudo docker-compose -f docker-compose.yml up -d
}