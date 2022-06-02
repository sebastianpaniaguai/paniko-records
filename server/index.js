// const express = require("express");
// const app = express();
// const port = 8080;
// require("dotenv").config();

// const Discogs = require("disconnect").Client;

// app.get("/:releaseId", async (req, res) => {
//   const { releaseId } = req.params;
//   var db = await new Discogs({
//     consumerKey: process.env.CLIENT_KEY,
//     consumerSecret: process.env.CLIENT_SECRET,
//   }).database();
//   const release = await db.getRelease(releaseId);
//   res.json(db);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

require("dotenv").config();

const Server = require("./models/server");
const server = new Server();
server.listen();
