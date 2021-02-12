FROM node:12.18.3-slim

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

# Running the app
# CMD "npm" "run" "dev"