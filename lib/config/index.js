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
