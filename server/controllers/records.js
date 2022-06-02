const discogs = require("../models/discogs");

const getRecords = async (req, res) => {
  const collection = await discogs.user().collection();
  const releases = await collection.getReleases("sebastian.paniaguai", 0, {
    page: 1,
    per_page: 50,
  });
  res.json(releases);
};

const getRecordById = async (req, res) => {
  const { id } = req.params;
  const db = await discogs.database();
  const release = await db.getRelease(id);
  res.json(release);
};

module.exports = {
  getRecords,
  getRecordById,
};
