const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Twitter = require('twitter');
const config = require('./web/twitterAPI/config.js')
const router = require('./web/router.js')

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// pathjoin for index.html
app.use('/public', express.static(path.join(__dirname, '/client/public')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));
app.use('/assets', express.static(path.join(__dirname, '/client/assets')));
app.get('/styles/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/styles.css'));
});

// api calls
// const client = new Twitter({
//   consumer_key: config.api.consumer_key,
//   consumer_secret: config.api.consumer_secret,
//   access_token_key: config.api.access_token_key,
//   access_token_secret: config.api.access_token_secret
// });
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.use('/api', router);
// console.log(router)
// app.get('/getTweets', (req, res) => {
//   var params = { screen_name: 'nodejs' };
//   client.get('statuses/user_timeline', params, (error, tweets, response) => {
//     if (!error) {
//       res.send(tweets);
//     }
//   });
// });
//
// app.get('/getTrends', (req, res) => {
//   let hashTags = [];
//   client.get('favorites/list', (error, tweets, response) => {
//     if(error) console.log('###Error Message###: ', error.body);
//     // console.log('##########tweets##########: ', tweets);  // The favorites.
//     res.send(tweets)
//     // console.log(response);  // Raw response object.
//   });
// })


app.listen(3456);
