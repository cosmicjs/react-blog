import express from 'express'
import fs from 'fs'
import path from 'path'
import Cosmic from 'cosmicjs'
import http_module from 'http'
import cors from 'cors'
import config from './config'
import _ from 'lodash'

const app = express();


app.use(cors())
app.set('port', (config.app.port || 5000))
const http = http_module.Server(app)


//CosmicJS credentials
const credentials = {
  bucket: {
    slug: config.bucket.slug,
    read_key: config.bucket.read_key,
    write_key: config.bucket.write_key,
  }
}

app.get('/api/posts', (req, res) => {
   Cosmic.getObjects(credentials, (err, response) => {
       if(err) return console.log(err);
       const posts = response.objects.type.posts;
       res.send(posts);
   })
 })


app.get('/api/posts/:slug', (req, res) => {
  Cosmic.getObjects(credentials, (err, response) => {
      if(err) return console.log(err);
      const posts = response.objects.type.posts;
      const queryPost = _.find(posts, ['slug', req.params.slug])
      res.send(queryPost);

  })
})


// if production, serve react bundle
if(app.get('env') === 'production'){
  app.use(express.static(path.resolve(__dirname, '../dist/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/build/index.html'))
  })
}


http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})
