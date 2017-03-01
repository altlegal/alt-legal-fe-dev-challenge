import React from 'react';
import { render } from 'react-dom';
import { ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillReceiveProps() {
    this.setState({
      data: this.props.data
    })
  }
  render() {
    // Create a custom function
    // Gets a tweet data with specific hashtag
    // For each message with hash tag return as Listgroup Item
    /* Get Trending Hashtags */
    // const listTrends = (trends) => {
    //   console.log('###data##', trends)
    //   if(trends.length >= 0){
    //     return trends.map((trend, i) => {
    //       return <ListGroupItem key={i}>{trend.name}</ListGroupItem>
    //     })
    //   }
    // }
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
        })
      }
    }
    console.log('props', this.props.data)
    return (
      <div className="tweet-form">
        <ListGroup>
          <ListGroupItem id="top-form-header">  {'#' + this.props.tag}</ListGroupItem>
          {listTweets(this.props.data)}
          <ListGroupItem>Item 1</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
export default TweetForm;
