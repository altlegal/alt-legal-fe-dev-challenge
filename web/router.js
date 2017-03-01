const express = require('express');
const router = require('express').Router();
const twitterAPI = require('./twitterAPI/tAPI.js')

router.post('/getTweets', twitterAPI.tweets.post)
router.get('/getTrends', twitterAPI.trends.get)

module.exports = router;
