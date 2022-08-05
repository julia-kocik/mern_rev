const express = require('express');
const router = express.Router();
const { getPrivateData } = require('../controllers/private');
const { getSessions } = require('../controllers/private');
const { postSession } = require('../controllers/private');
const { deleteSessions } = require('../controllers/private');
const { deleteOneSession } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route("/").get(protect, getPrivateData);
router.route("/sessions").get(protect, getSessions);
router.route("/sessions").post(protect, postSession);
router.route("/sessions").delete(protect, deleteSessions);
router.route("/sessions/:id").delete(protect, deleteOneSession);

module.exports = router;