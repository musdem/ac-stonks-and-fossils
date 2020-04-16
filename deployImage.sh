#!/bin/bash

docker pull musdem/stonks-and-fossils
docker stop stonks-and-fossils
docker rm stonks-and-fossils
docker run -d -p 4000:4000 --name stonks-and-fossils musdem/stonks-and-fossils