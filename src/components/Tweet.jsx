import React from 'react';
import PropTypes from 'prop-types';
import { FaFish } from 'react-icons/fa';

class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fishCount: 0
    };
    this.increaseFishCount = this.increaseFishCount.bind(this);
  }

  increaseFishCount(event) {
    let newFishCount = this.state.fishCount + 1
    this.setState({fishCount: newFishCount});
  }


render() {
  return (
    <div>
    <h3> {this.props.title}</h3>
    <p>{this.props.body}</p>
    <a><FaFish onClick={this.increaseFishCount}/></a><span>{this.state.fishCount}</span>
    </div>
  );
}
}

Tweet.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Tweet;

//
// var tweetBox = {
//   textAlign: 'center',
//   border: '2px solid black',
//   borderRadius: '5px',
//   marginBottom: '20px',
//   width: '300px'
// }
