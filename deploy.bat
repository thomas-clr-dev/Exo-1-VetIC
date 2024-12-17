@REM #!/bin/bash

echo "Starting deployment process..."

@REM # Install all dependencies

echo "Installing dependencies..."
npm install

@REM # Launch all the tests

echo "Running tests..."
npm test

@REM # # Build the project

@REM # echo "Building the project..."
@REM # npm run build

@REM # # Deploy the project

@REM echo "Deploying the project..."
@REM git push origin main

echo "Deployment process completed."