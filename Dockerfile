# image
FROM node:10-alpine

LABEL maintainer="raniket <raniketram@gmail.com>"

# Create app dirctory, this is the dirctory to hold the application code inside the image.
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# if you are building your code for projuction
# RUN npm ci --only=production

# Bundle app's source code inside teh Docker image
COPY . .

# app binds to port 9000 so use the EXPOSE  instruction to have it mapped by the docker daemon
EXPOSE 9000

# define the command to run your app using CMD
CMD [ "npm", "start" ]
