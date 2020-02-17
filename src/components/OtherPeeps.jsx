import React from 'react';


function OtherPeepsList(){

  var peepsBox = {
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '300px'
  }
  return (
    <div>
      <div style={peepsBox}>
        <h3>Barnacle Bill</h3>
        <h4>KIDS THESE DAYS!!!!!!!</h4>
        <p>I mean they don't know anything. And I know EVERYTHING.</p>
      </div>
      <div style={peepsBox}>
        <h3>Coral Kenny</h3>
        <h4>Back issues</h4>
        <p>My chiropractor is less than stellar. Anyone got a recommendation?</p>
      </div>
      <div style={peepsBox}>
        <h3>Blue Ringed Octopus Fan67</h3>
        <h4>Leafblower broken!</h4>
        <p>There are actual leaves on my lawn and I can't do anything about them. Someone help me please</p>
      </div>
    </div>
  );
}

export default OtherPeepsList;
