# First stage: build the React application
FROM node:20 AS build-stage

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Second stage: serve the application using Nginx
FROM nginx:1.25-alpine

# Copy the built files from the first stage to Nginx's HTML directory
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration, if any (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port on which Nginx will serve the application
EXPOSE 80

# No need to specify CMD as Nginx's default command will start the server
