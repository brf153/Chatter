const express = require('express');

const { signup, login, guestLogin } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post("/guest", guestLogin);

module.exports = router;