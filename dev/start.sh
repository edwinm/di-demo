#!/usr/bin/env bash

cd ../voting_node/server
CONFIG=../../dev/config-dev.json PRIVATE_KEY=$(cat ../../dev/private_key.pem) POSTGRES_HOST=localhost POSTGRES_DATABASE=postgres POSTGRES_USER=postgres POSTGRES_PASSWORD=hj21kjy npx nodemon index.js
