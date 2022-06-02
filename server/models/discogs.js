const Discogs = require("disconnect").Client;

const discogs = new Discogs({
  consumerKey: process.env.DISCOGS_CLIENT_KEY,
  consumerSecret: process.env.DISCOGS_CLIENT_SECRET,
});

module.exports = discogs;
