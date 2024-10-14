# Subgraph

https://github.com/graphprotocol/graph-node/

## Indexing

For:

- whitelist
- nodes
- staking

UI query

ganache-cli

https://thegraph.academy/developers/local-development/

```bash
git submodule add https://github.com/graphprotocol/graph-node/ subgraph/graph-node
```

```bash
pnpm add -g @graphprotocol/graph-cli
graph init --from-contract 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318 --network localhost whitelisted
```


```bash
cd subgraph/graph-node/docker
./setup.sh
docker-compose up -d

graph init --network localhost --from-contract 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
```

https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md
https://github.com/graphprotocol/graph-tooling/tree/main/packages/cli
https://thegraph.com/docs/en/quick-start/
https://thegraph.com/docs/en/developing/creating-a-subgraph/

https://docs.alchemy.com/reference/deploying-a-subgraph


```bash
http://localhost:8000/subgraphs/name/ln1/whitelisted
```