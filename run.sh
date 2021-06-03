#!/bin/bash

docker ps --filter ancestor=myfunction:latest -q | xargs docker kill

docker build -t myfunction:latest .

docker run -v ~/.aws-lambda-rie:/aws-lambda -p 9000:8080 \
    --entrypoint /aws-lambda/aws-lambda-rie \
    myfunction:latest \
        /usr/local/bin/npx aws-lambda-ric app.handler
