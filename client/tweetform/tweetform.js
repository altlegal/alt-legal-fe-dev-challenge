import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { Button, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
=======
import { ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
        </ListGroup>
      </div>
    )
  }
}
export default TweetForm;
<<<<<<< HEAD
/* <ListGroupItem id="top-form-header">
  {'#' + this.props.tag}
  <button className="warning" onClick={this._deleteData}> Delete </button>
</ListGroupItem> */
=======
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
