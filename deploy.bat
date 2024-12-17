@REM #!/bin/bash

echo "Starting deployment process..."

@REM # Install all dependencies

@REM echo "Installing dependencies..."
@REM npm install

@REM # Launch all the tests

@REM echo "Running tests..."
@REM npm test

@REM # # Build the project

@REM # echo "Building the project..."
@REM # npm run build

@REM # # Deploy the project

echo "Deploying the project..."
git add .
git commit -m "Deployment"
git push origin main

echo "Deployment process completed."