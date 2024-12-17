#!/bin/bash

echo "Starting deployment process..."

# Install all dependencies

echo "Installing dependencies..."
npm install

# Launch all the tests

echo "Running tests..."
npm test

# # Build the project

# echo "Building the project..."
# npm run build

# Deploy the project

# echo "Deploying the project..."
# git push origin main

echo "Deployment process completed."