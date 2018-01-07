#!/bin/bash

./node_modules/.bin/webpack -p &
npm run build:server &
NODE_ENV=production npm run serve &

wait
