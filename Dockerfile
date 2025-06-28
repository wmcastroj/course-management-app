FROM node:22.11 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:1.27
COPY --from=build  /app/dist/course-management-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]