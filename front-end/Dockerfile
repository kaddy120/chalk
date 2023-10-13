# syntax=docker/dockerfile:1

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use a lightweight Nginx web server as a parent image
FROM nginx:latest

# Copy the built React app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
