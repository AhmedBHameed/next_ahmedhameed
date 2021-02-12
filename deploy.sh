#!/bin/bash

echo "Shutdown docker container ...\n"
{
    sudo -S docker-compose -f docker-compose.yml down && echo "Rebuild docker container ...\n" && sudo -S docker-compose -f docker-compose.yml up --build -d
} || {
    echo "Rebuild docker container ...\n" && sudo -S docker-compose -f docker-compose.yml up --build -d
}