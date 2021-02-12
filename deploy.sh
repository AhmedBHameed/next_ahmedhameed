#!/bin/bash

sudo -t docker-compose -f docker-compose.yml down && sudo -t docker-compose -f docker-compose.yml up --build -d