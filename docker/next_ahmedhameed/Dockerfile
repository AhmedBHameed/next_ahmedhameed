FROM node:12.18.3-slim

USER root
ADD ./sudoers.txt /etc/sudoers
RUN chmod 440 /etc/sudoers
USER nodeys

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/next_ahmedhameed
WORKDIR /usr/src/next_ahmedhameed

# Installing dependencies
COPY ./package*.json ./
RUN yarn install

# Copying source files
COPY ./ .

# Building app
RUN yarn build
EXPOSE 3000


FROM strider/strider-docker-slave
# Running the app
# CMD "npm" "run" "dev"