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
    const listTweets = (trends) => {
      console.log('###data##', trends)
        trends.data.forEach((tweet) => {
          return <ListGroupItem>{tweet}</ListGroupItem>
      })
    }
    console.log('props', this.props.data)
    return (
      <div className="tweet-form">
        <ListGroup>
          {listTweets(this.state.data)}
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
export default TweetForm;
