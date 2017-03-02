import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import Tweetform from '../tweetform/tweetform.js';

class TweetBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watchlists: []
    }
    // this.deleteHandler = this.deleteHandler.bind(this)
  }
  componentWillMount() {
    // this.setState({ watchlists: this.props.watchlists })
  }
  componentWillReceiveProps() {
    // Set state to the props
    this.setState({ watchlists: this.props.watchlists })
  }
  componentWillUpdate() {

  }
  // deleteHandler(e) {
  //   var idx = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id, 10);
  //   console.log("BUTTON PRESSED", e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
  //   this.setState(state => {
  //           state.watchlists.splice(idx, 1);
  //           return { watchlists: state.watchlists };
  //       });
  //     e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
  //   // console.log('Delete Pressed', e.target.parentElement.parentElement.parentElement);
  // }
  render() {

    var that = this
    const tweetform = () => {
      console.log('TWEETBOX', this.props.watchlists)
      var num = this.state.watchlists.length
         return this.state.watchlists.map((tweetform, index) => {

          return (
            <div id={index} key={index}>
              <Col xs={18/num} md={12/num}>
                {/* <Tweetform key={idx} handler={this.handler} data={tweetform.text} tag={this.props.tag[idx]}/> */}
                <Tweetform data={tweetform.data} search={this.props.search} value={index} handler={this.props.deleteHandler} tag={this.props.tag}/>
              </Col>
            </div>
          );
        }, this)
      }
    return (
      <div className="tweet-box">
        <Row>
          {tweetform()}
        </Row>
      </div>
    )
  }
}

export default TweetBox;
