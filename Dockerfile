# Use the official Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install dependencies with npm ci
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Set the build output directory as the working directory
WORKDIR /app/build

# Start the application
CMD ["node", "index.js"]
