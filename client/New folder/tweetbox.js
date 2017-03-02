import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import SearchBar from '../search/search.js';
import TweetForm from '../tweetform/tweetform.js';

class TweetBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps() {
    // Set state to the props
  }

  render() {
    // props's is an array, base on length create <Col></Col>
    var tweetform = () => {
      if(this.props.tweetforms){
        return this.props.tweetforms.map((tweetform, i) => {
          return (
            <div>
              <SearchBar key={i} options={this.props.trends} updateChild={this.props.handler}/>
              <TweetForm key={i} data={tweetform.tweets} tag={tweet.search} />
            </div>
          )
        })
      }
    }
    return (
      <div className="tweet-box">
        <Row>
          {tweetform}
        </Row>
      </div>
    )
  }
}

export default TweetBox;
