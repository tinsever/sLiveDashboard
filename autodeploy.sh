#!/bin/bash

PORT=3000
PROJECT_DIR="/root/sLiveDashboard"
BRANCH="main"
APP_NAME="slivedash"

while true; do
  # Listen for incoming HTTP POST requests
  REQUEST=$(nc -l -p $PORT -q 1)

  # Check if the request contains a push event to the specified branch
  if echo "$REQUEST" | grep -q "refs/heads/$BRANCH"; then
    echo "Push event detected on branch $BRANCH. Pulling changes and rebuilding..."

    # Navigate to the project directory and run the necessary commands
    cd $PROJECT_DIR
    git pull origin $BRANCH
    npm ci
    npm run build

    # Check if the application is already running with PM2
    if pm2 list | grep -q "$APP_NAME"; then
      echo "Application is already running. Restarting..."
      pm2 restart $APP_NAME
    else
      echo "Application is not running. Starting..."
      pm2 start build/index.js --name $APP_NAME # Adjust the entry point as needed
    fi

    echo "Deployment completed."
  else
    echo "No relevant push event detected."
  fi
done
