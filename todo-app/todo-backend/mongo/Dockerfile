FROM mongo

# Install MongoDB client tools
RUN apt-get update \
    && apt-get install -y mongodb-clients && apt-get install mongo-tools\
    && rm -rf /var/lib/apt/lists/*

COPY ./mongo-init.js /docker-entrypoint-initdb.d/