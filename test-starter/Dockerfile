FROM cypress/base:10
RUN node --version
RUN npm --version
RUN pwd
WORKDIR /home/node/app
COPY package.json package-lock.json ./
COPY cypress.json cypress ./
COPY cypress ./cypress
# install dependencies
RUN npm ci
#check cypress installation is succesful
RUN $(npm bin)/cypress verify
