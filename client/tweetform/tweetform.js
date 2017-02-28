import React from 'react';
import { render } from 'react-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
          return (
            <ListGroupItem key={i}>
              <img src={tweet.img}></img>
              <h1>{tweet.username}</h1>
              <h2>{tweet.name}</h2>
              <p>{tweet.text}</p>


            </ListGroupItem>
          )
        })
      }
    }
    console.log('props', this.props.data)
    return (
      <div className="tweet-form">
        <ListGroup>
          <ListGroupItem header={'#' + this.props.tag}></ListGroupItem>
          {listTweets(this.props.data)}
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
export default TweetForm;
