# This official base image contains node.js and npm
FROM node:8

ARG VERSION=1.0.0

# Set working directory
WORKDIR /app

# Copy the application files
COPY . /app/

LABEL license=MIT \
      version=$VERSION

RUN npm install

EXPOSE 8080

# Run application
CMD node app.js
