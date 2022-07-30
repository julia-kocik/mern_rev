const express = require('express');
const router = express.Router();
const { getPrivateData } = require('../controllers/private');
const { getSessions } = require('../controllers/private');
const { getSession } = require('../controllers/private');
const { postSession } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route("/").get(protect, getPrivateData);
router.route("/sessions").get(protect, getSessions);
// router.route("/sessions/:id").get(protect, getSession);
router.route("/sessions").post(protect, postSession);

module.exports = router;