const express = require('express');
const app = express();
const Twitter = require('twitter');
const config = require('./config.js');

const client = new Twitter({
  consumer_key: config.api.consumer_key,
  consumer_secret: config.api.consumer_secret,
  access_token_key: config.api.access_token_key,
  access_token_secret: config.api.access_token_secret
});

console.log("############ tAPI ###########")
module.exports = {
  status: {
    get: (req, res) => {
      var params = { screen_name: 'nodejs' };
      client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (error) console.log('Error Message: ', error)
        res.send(tweets);
      })
    }
  },
  trends: {
    get: (req, res) => {
      let hashtags = [];
      client.get('trends/place', {id: 2459115}, (error, tweets, response) => {
        if(error) console.log('Error Message: ', error)
        tweets[0].trends.forEach((element, idx) => {
          if(element.name[0] === "#") hashtags.push(element);
        })
        res.status(200).send(hashtags)
      })
    }
  }
}
