# Cosmic JS Blog
## React, Redux, Node, Cosmic JS


1. [React/Redux](#header-react/redux)
1. [Node](#header-node)
1. [Config](#header-config)
1. [Development](#header-development)
1. [Demo](#header-demo)



## Node
- ``` lib/app.js```
- Node REST API to query Cosmic JS DB
- [cosmicjs-node](https://github.com/cosmicjs/cosmicjs-node)
``` javascript
Cosmic.getObjects(credentials, (err, response) => {})
```

## React/Redux
- ```src/app/*```
- Redux calls our Node API server, which in turn retrieves our Cosmic JS blog content.

## Development
- ```npm install```
- Terminal 1 - ```npm run start:server```
- Terminal 2 - ```npm run start:dev```
- [localhost:3000]('http://localhost:3000')

## Config
-  Add the following code to your ```config/index.js``` file with your CosmicJS credentials.
``` javascript
const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'YOUR COSMIC SLUG',
    write_key: process.env.WRITE_KEY ||'YOUR COSMIC WRITE KEY',
    read_key: process.env.READ_KEY ||' YOUR COSMIC READ KEY'
  }
}

module.exports = config;
```


## [Demo](http://67.207.81.214:5000/)
