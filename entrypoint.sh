#!/bin/bash

# Wait for the PostgreSQL database to be ready
until pg_isready -h database -p 5432 -U username; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Run Prisma migrations
npx prisma migrate dev --name init

# Execute the main command passed to the container
exec "$@"
