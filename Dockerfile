FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build && npm prune --production

RUN cd frontend && npm install

FROM node:20-alpine

ENV PORT=3001
ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/frontend /app/frontend
COPY --from=build /app/output /app/output

EXPOSE 3001

CMD [ "node", "dist/main.js" ]
