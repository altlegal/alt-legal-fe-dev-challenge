import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import SearchBar from '../search/search.js';
import TweetForm from '../tweetform/tweetform.js';
import TweetBox from '../tweetbox/tweetbox.js';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  /* GET / POST Requests to Node.js */
  getTrends() {
    axios.get('/api/getTrends')
    .then((response) => {
      this.setState({ trends: response.data })
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
  }
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
      console.log('saved successfully')
    });
  }
  /* end of Get / Post Requests to Node.js */
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
      </div>
    )
  }
}
export default Main;
