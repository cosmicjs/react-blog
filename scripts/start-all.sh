#!/bin/bash

npm run start:server &
npm run start:client &

wait
