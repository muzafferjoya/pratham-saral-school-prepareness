FROM node:21.1-bookworm-slim
LABEL maintainer="dileep.gadiraju@tarento.com"

ENV PROFILE=dev
ENV PORT=3000
ENV MONGODB_URL=mongodb://docker.for.mac.localhost:27017/saralnew
ENV JWT_SECRET=SARALDATA_NODE
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test

RUN echo JWT_SECRET=$JWT_SECRET

RUN chmod +x ./entrypoint.sh

RUN mkdir ./config && touch ./config/$PROFILE.env \
    && echo PORT=$PORT >> ./config/$PROFILE.env  \
    && echo MONGODB_URL=$MONGODB_URL >> ./config/$PROFILE.env \
    && echo JWT_SECRET=$JWT_SECRET >> ./config/$PROFILE.env \
    && chmod 777 ./config/$PROFILE.env

EXPOSE $PORT

CMD ["/bin/bash","-c","./entrypoint.sh $PROFILE $PORT $MONGODB_URL $JWT_SECRET"]