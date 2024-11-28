# Use a lightweight image with Node.js and npm
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy all game files to the container
COPY . .

# Install a simple HTTP server globally
RUN npm install -g http-server

# Expose port 8080 for the server
EXPOSE 8090

# Start the HTTP server to serve the static files
CMD ["http-server", ".", "-p", "8090"]
