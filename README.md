## Repository di_node_container

### Install

```shell
cd voting_node
docker build -t voting_node .
```

### Run

1. Make sure IRMA is running (see `irma_server_container`)
2. Add the IP-address of IRMA to `server/config/*.json`)
3. Make sure PostgreSQL is running:

```shell
cd db
./postgres.sh
```

### Run production mode

```shell
cd voting_node
docker run -it -p80:80 -e CONFIG=config-prod.json -e PRIVATE_KEY="$(cat ../dev/private_key.pem)" -e POSTGRES_HOST=localhost -e POSTGRES_DATABASE=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=hj21kjy voting_node
```

### Run development mode

```shell
cd voting_node
cp ../dev/config-dev.json server
docker build -t voting_node .
docker run -it -p80:80 -e STAGE=dev -e CONFIG=config-dev.json -e PRIVATE_KEY="$(cat ../dev/private_key.pem)" -e POSTGRES_HOST=localhost -e POSTGRES_DATABASE=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=hj21kjy voting_node
```

### Run local without Docker

```shell
cd voting_node/server
npm install
cd ../../dev
./start.sh
```
