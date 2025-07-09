# ------------------------------
# Etapa 1: Builder
# ------------------------------
FROM node:18-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ------------------------------
# Etapa 2: Runner
# ------------------------------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# REMOVIDO: COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3001

CMD ["npx", "next", "start", "-p", "3001", "-H", "0.0.0.0"]
