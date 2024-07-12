# Use the official Node.js 14 image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY --chown=node:node package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application code to the working directory
COPY --chown=node:node . .

# Change the user to 'node'
USER node

# Expose the port that your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]