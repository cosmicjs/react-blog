# Cosmic JS Blog
## React, Redux, Node, Cosmic JS


1. [React](#react)
1. [Node](#node)
1. [Config](#config)
1. [Development](#development)
1. [Demo](#demo)



## Node
- ``` lib/app.js```
- Node REST API to query Cosmic JS DB
- [cosmicjs-node](https://github.com/cosmicjs/cosmicjs-node)
``` javascript
const params = {
  query: {
    type: 'posts',
    locale: 'en' // optional, if localization set on Objects
  },
  limit: 5,
  props: 'id,slug,title,content', // get only what you need
  sort: '-created_at' // optional, defaults to order in dashboard
}
bucket.getObjects(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

## React
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


## [Demo](https://cosmicjs.com/apps/react-blog)
