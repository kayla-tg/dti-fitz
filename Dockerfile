# Dockerfile
FROM node:20

WORKDIR /app

# Copy only package.json if yarn.lock doesn't exist
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of your app
COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]

