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
      tweets: [] // Tweets related to the hashtag
    }
    this.getTrends = this.getTrends.bind(this);
  }
  componentWillMount() {
    this.getTrends();
  }
  /* GET / POST Requests to Node.js */
  getTrends(){
    axios.get('/api/getTrends')
    .then( (response) => {
        this.setState({ trends: response })
      console.log(response);
    })
    .catch( (response) => {
      console.log(response);
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
            <TweetForm data={this.state.trends}/>
          </Col>
          <Col xs={6} md={4}>
            2 of 3
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
