import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import TweetList from './TweetList';
import NewTweetForm from './NewTweetForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
var appBody = {
  textAlign: 'center'
}
  return (
    <div style = {appBody}>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <Profile/>
      <Switch>
        <Route exact path='/' component={TweetList} />
        <Route path='/newtweet' component={NewTweetForm} />
        <Route component={Error404} />
      </Switch>


    </div>
  );
}

export default App;
