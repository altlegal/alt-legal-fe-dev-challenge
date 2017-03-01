import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import SearchBar from '../search/search.js';
import TweetForm from '../tweetform/tweetform.js';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '', // Keyword search
      trends: [], // Trending Tags we want to know
      tweets: []// Tweets related to the hashtag
    }
    this.getTrends = this.getTrends.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.handler = this.handler.bind(this);
  }
  componentWillMount() {
    // if(localStorage.getItem('tweets').length > 0){
      // this.setState({ tweets: localStorage.getItem('tweets') })
    // }
    if(localStorage.search){
      this.setState({ search: localStorage.getItem('query')})
    }
    this.getTrends();
    this.getTweets();
  }
  componentWillUpdate() {
    console.log(localStorage)
    console.log('update occur')
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
  // Get tweets based on Hashtag
  getTweets() {
    console.log('fired get tweets!!!!!!!!!!!')
    axios.post('/api/getTweets', {
      // hashtag: this.state.search
      hashtag: localStorage.getItem('query')
    })
    .then((response) => {
      localStorage.setItem('tweets', JSON.stringify(response.data));
      console.log('state tweets: ', this.state.tweets)
      this.setState({ tweets: response.data })
      console.log('response', response)
      console.log('saved successfully')
    });
  }
  /* end of Get / Post Requests to Node.js */
  /* Handler for children to update parent later wewew */
  handler(search) {
    this.setState({
      search: search
    })
    localStorage.setItem('query', search)
    localStorage.setItem('search', search)
    console.log('state in handler', this.state.search)
    this.getTweets()
  }
  /* render the components */
  render() {
    return (
      <div className="main">
        <SearchBar options={this.state.trends} updateChild={this.handler}/>
        <div className="main-tweet">
          <Row>
            <Col xs={6} md={4}>
              1 of 3
              <TweetForm data={this.state.tweets} tag={localStorage.search} onChange={this.getTweets} />
            </Col>
            <Col xs={6} md={4}>
              2 of 3

            </Col>
            <Col xs={6} md={4}>
              3 of 3
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Main;
