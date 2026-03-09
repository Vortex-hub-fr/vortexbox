FROM node:20-alpine

WORKDIR /app

# Copy only package metadata first for better layer caching.
COPY package*.json ./

# Install production dependencies when present.
RUN npm install --omit=dev || npm install

# Copy project files.
COPY . .

# Ensure runtime writable directories exist.
RUN mkdir -p /app/uploads /app/data /app/data/content-backups

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
