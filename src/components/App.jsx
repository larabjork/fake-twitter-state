import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import TweetList from './TweetList';
import NewTweetForm from './NewTweetForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // var appBody = {
  //   textAlign: 'center'
  // }

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render(){
    return (
      <div>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <Profile/>
      <Switch>
      <Route exact path='/' render={()=><TweetList tweetList={this.state.masterTweetList} />}  />
      <Route path='/newtweet' render={()=><NewTweetForm onNewTweetCreation={this.handleAddingNewTweetToList} />}  />
      <Route component={Error404} />
      </Switch>


      </div>
    );
  }
}

export default App;
