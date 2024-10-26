# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all other source code files
COPY . .

# Create a .env file with build-time variables
ARG TWITCH_CLIENT_ID
ARG TWITCH_REDIRECT_URI
ARG APP_URL
ARG API_URL
RUN echo "TWITCH_CLIENT_ID=$TWITCH_CLIENT_ID" > .env
RUN echo "TWITCH_REDIRECT_URI=$TWITCH_REDIRECT_URI" >> .env
RUN echo "APP_URL=$APP_URL" >> .env
RUN echo "API_URL=$API_URL" > .env

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets and package files from builder
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

# Install only production dependencies
RUN npm ci --production

# Expose the port the app will run on (adjust if needed)
EXPOSE 3000

# Environment variables will be provided at runtime
ENV TWITCH_CLIENT_ID=
ENV TWITCH_REDIRECT_URI=
ENV APP_URL=
ENV API_URL=
# Start the application
CMD ["node", "build"]
