const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const loginWithGoogleApi = require('./loginWithGoogle');
const loginWithGithubApi = require('./loginWithGithub');
const userApi = require('./user');
// kaddy
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(loginWithGoogleApi);
router.use(loginWithGithubApi);
router.use(userApi);

module.exports = router;
