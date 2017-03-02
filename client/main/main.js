import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import SearchBar from '../search/search.js';
import TweetForm from '../tweetform/tweetform.js';
<<<<<<< HEAD
import TweetBox from '../tweetbox/tweetbox.js';
=======
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      search: '', // Keyword search
      trends: [], // Trending Tags we want to know
      tweets: [], // Tweets related to the hashtag
      hashes: [],
      watchlists: {
        watchlist1: { tweets: [] , tag: ''},
        watchlist2: { tweets: [] , tag: ''},
        watchlist3: { tweets: [] , tag: ''}
      } // Hashtags we are keeping track of
    }
    this.deleteHandler = this.deleteHandler.bind(this)
    this.getTrends = this.getTrends.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.handler = this.handler.bind(this);
  }
  componentWillMount() {
    localStorage.setItem('tweets', '[]')
    localStorage.setItem('search','')
    // if(localStorage.search){ this.setState({ search: localStorage.getItem('query') }) }
    this.getTrends(); // Get Trending Data in U.S for Autocomplete
=======
      search: 'nintendo', // Keyword search
      trends: [], // Trending Tags we want to know
      tweets: [] // Tweets related to the hashtag
    }
    this.getTrends = this.getTrends.bind(this);
    this.getTweets = this.getTweets.bind(this);
  }
  componentWillMount() {
    this.getTrends();
    this.getTweets();
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
  }
  /* GET / POST Requests to Node.js */
  getTrends() {
    axios.get('/api/getTrends')
    .then((response) => {
<<<<<<< HEAD
      this.setState({ trends: response.data })
=======
        this.setState({ trends: response.data })
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
  }
<<<<<<< HEAD
  /* Get tweets based on Hashtag */
  getTweets() {
    axios.post('/api/getTweets', {
      // hashtag: this.state.search
      hashtag: localStorage.search
    })
    .then((response) => {
      localStorage.setItem('tweets', JSON.stringify(response.data));
      this.setState({ search: localStorage.search })
      // if(this.state.tweets <= 3){
        this.state.tweets.push({
          data: response.data,
          hash: localStorage.search
        })

      console.log('response', response)
=======
  getTweets() {
    axios.post('/api/getTweets', {
      hashtag: this.state.search
    })
    .then((response) => {
      console.log('tweet response', response.data)
      this.setState({ tweets: response.data })
      // console.log('response', response)
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
      console.log('saved successfully')
    });
  }
  /* end of Get / Post Requests to Node.js */
<<<<<<< HEAD
  /* Retrieve Info from localStorage */

  /* Handler for children to update parent later */
  handler(search) {
    localStorage.setItem('search', search)
    this.getTweets()
  }
  deleteHandler(e) {
    var idx = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.key, 10);
    console.log("BUTTON PRESSED")
    this.setState(state => {
            state.tweets.splice(idx, 1);
            return { tweets: state.tweets };
        });
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

  }
  /* render the components */
  render() {
    return (
      <div className="main">
        <SearchBar options={this.state.trends} updateChild={this.handler}/>
        <TweetBox search={this.getTweets} watchlists={this.state.tweets} deleteHandler={this.deleteHandler} tag={localStorage.search} />
=======
  render() {
    return (
      <div className="main">
        <SearchBar />
          <div className="main-tweet">
          <Row>
            <Col xs={6} md={4}>
              1 of 3
              <TweetForm data={this.state.tweets} tag={this.state.search}/>
            </Col>
            <Col xs={6} md={4}>
              2 of 3
              {/* <TweetForm /> */}
            </Col>
            <Col xs={6} md={4}>
              3 of 3
            </Col>
          </Row>
        </div>
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
      </div>
    )
  }
}
export default Main;
