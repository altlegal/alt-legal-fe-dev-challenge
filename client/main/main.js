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
  getTweets() {
    axios.post('/api/getTweets', {
      hashtag: this.state.search
    })
    .then((response) => {
      console.log('tweet response', response.data)
      this.setState({ tweets: response.data })
      // console.log('response', response)
      console.log('saved successfully')
    });
  }
  /* end of Get / Post Requests to Node.js */
  render() {
    return (
      <div className="main">
        <SearchBar />
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
    )
  }
}
export default Main;
