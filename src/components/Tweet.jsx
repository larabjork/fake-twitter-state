import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props){

  var tweetBox = {
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '300px'
  }
  return (
    <div style={tweetBox}>
      <h3> {props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

Tweet.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Tweet;
