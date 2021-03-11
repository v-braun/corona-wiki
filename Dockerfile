# build environment

FROM node:fermium-alpine3.12 as build
ARG HOST_NAME

RUN apk add --update \
    jq \
    && rm -rf /var/cache/apk/*


WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install react-scripts@3.4.1 -g

COPY package.json ./
COPY package-lock.json ./

RUN npm ci
COPY . ./

# overwrite the homepage
RUN jq ".homepage = \"https://${HOST_NAME}\"" package.json > package.json.tmp && cp package.json.tmp package.json

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]