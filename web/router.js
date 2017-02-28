const express = require('express');
const router = require('express').Router();
const tweets = require('./twitterAPI/tAPI.js')

router.get('/getTweets', tweets.status.get)
router.get('/getTrends', tweets.trends.get)

module.exports = router;
