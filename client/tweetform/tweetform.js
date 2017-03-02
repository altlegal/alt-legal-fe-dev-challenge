import React from 'react';
import { render } from 'react-dom';
import { Button, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ""
    }
    this._deleteData = this._deleteData.bind(this)
  }
  componentWillMount() {

  }
  componentWillReceiveProps() {
    this.setState({
      tag: this.props.tag
    })
  }
  _deleteData = (event) => {
    localStorage.setItem('search', '')
    localStorage.setItem('tweets', '[]')
    this.props.handler(event)
    this.props.search()
  }

  render() {
    console.log("tweetbox", this.props.data)
    // Create a custom function
    // Gets a tweet data with specific hashtag
    // For each message with hash tag return as Listgroup Item
    /* Get Tweets from the selected hashtag */
    const listTweets = (tweets) => {
      console.log('###tweets###', tweets)
      if(tweets.length >= 0){
        return tweets.map((tweet, i) => {
          if(i < 5) {
            return (
              <ListGroupItem key={i}>
                <Row>
                  <Col xs={3} md={2}>
                  <img id="tweet-img" src={tweet.img}></img>
                 </Col>
                  <Col xs={15} md={10} id="tweet-info">
                      <span id="tweet-username">{tweet.username}</span>
                      <span id="tweet-scname"> {tweet.screen_name}</span>
                    <p id="tweet-text">{tweet.text}</p>
                  </Col>
                </Row>
              </ListGroupItem>
            )
          }
        }, this)
      }
    }
    return (
      <div className="tweet-form" id="tweet-form">
        <ListGroup>
          <ListGroupItem id="top-form-header">
            {'#' + this.props.tag}
            <Button id="delete-btn" bsSize="small" bsStyle="danger" onClick={this._deleteData}> Delete </Button>
          </ListGroupItem>
          {listTweets(this.props.data)}
        </ListGroup>
      </div>
    )
  }
}
export default TweetForm;
/* <ListGroupItem id="top-form-header">
  {'#' + this.props.tag}
  <button className="warning" onClick={this._deleteData}> Delete </button>
</ListGroupItem> */
