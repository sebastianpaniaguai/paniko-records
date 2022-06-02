const { Router } = require("express");
const { getRecords, getRecordById } = require("../controllers/records");
const router = Router();

router.get("/", getRecords);

router.get("/:id", getRecordById);

module.exports = router;
