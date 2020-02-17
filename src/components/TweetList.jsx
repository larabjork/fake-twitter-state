import React from 'react';
import Tweet from './Tweet';

var masterTweetList = [
  {
    title: 'Barnacles',
    body: 'Very briny. And wet. And salty?',
  },
  {
    title: 'Mussels',
    body: 'Do you want to tapdance?',
  },
  {
    title: 'Oysters',
    body: 'Totalitarianism is emminant and I have ennui.',
  }
];

function TweetList(){
  return (
    <div>
      {masterTweetList.map((tweet, index) =>
        <Tweet title={tweet.title}
          body={tweet.body}
          key={index}/>
      )}
    </div>
  );
}

export default TweetList;
