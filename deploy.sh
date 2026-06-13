#!/bin/bash

set -e

echo "Pulling latest code..."
git pull origin main

echo "Building containers..."
docker compose build

echo "Starting updated containers..."
docker compose up -d

echo "Waiting for services to become healthy..."
sleep 15

echo "Container status:"
docker ps

echo "Deploy complete."