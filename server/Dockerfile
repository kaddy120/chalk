# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.0.0
ARG PACK_LOCK=/home/kaddy120/workspace/learn-react/create-cv/package-lock.json

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
EXPOSE 3000

FROM base as dev
RUN --mount=type=bind,source=package.json,target=package.json \
    # --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm install 
USER node
COPY . .
CMD npm run dev

FROM base as prod
ENV NODE_ENV production
COPY ../package-lock.json package-lock.json
RUN --mount=type=bind,source=package.json,target=package.json \
    # --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm install --production
USER node
COPY . .
CMD node src/index.js
