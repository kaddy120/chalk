# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
EXPOSE 5000

# Build the React app
FROM base AS prod-build
COPY package*.json ./
# RUN npm ci --omit=dev
RUN npm install
COPY . .
RUN npm run build

# Use a lightweight Nginx web server as a parent image
FROM nginx:latest as prod

# Copy the built React app from the previous stage
COPY --from=prod-build /app/build /usr/share/nginx/html

# Expose the port that Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Install development dependencies and start development server
FROM base AS dev
RUN --mount=type=bind,source=package.json,target=package.json \
    # --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm install
COPY . .
CMD npm run dev
