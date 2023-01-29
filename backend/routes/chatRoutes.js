const express = require('express')
const router = express.Router();

const { accessChat, fetchChats } = require('../controllers/chat')

router.route('/').post(accessChat).get(fetchChats);

module.exports = router;