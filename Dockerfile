# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /src

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Build the project and start the development server
CMD ["npm", "run", "dev"]