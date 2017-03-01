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
  tweets: {
    post: (req, res) => {
      console.log('req.body.hashtag: ', req.body.hashtag)
      client.get('search/tweets', {q: req.body.hashtag, lang: "en"}, (error, tweets, response) => {
        if (error) console.log('Error Message: ', error)
        // Break down tweet into a more comprehensive JSONX Object
        let result = [];
        if(tweets.statuses){
          tweets.statuses.forEach((tweet) => {
            let tweetInfo = {
              screen_name: '@' + tweet.user.screen_name,
              username: tweet.user.name,
              text: tweet.text,
              img: tweet.user.profile_image_url,
            }
            result.push(tweetInfo)
          })
          res.status(200).send(result);
        } else {
          res.send(error)
        }
      })
    }
  },
  trends: {
    get: (req, res) => {
      let hashtags = [];
      client.get('trends/place', {id: 23424977}, (error, tweets, response) => {
        if(error) console.log('Error Message: ', error)
        tweets[0].trends.forEach((element, idx) => {
          if(element.name[0] === "#") hashtags.push(element);
        })
        res.status(200).send(hashtags)
      })
    }
  }
}
