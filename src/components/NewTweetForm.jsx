import React from 'react';

function NewTweetForm(){

  const formStyle = {
    textAlign: 'center',
    border: '2px solid black',
    backgroundColor: "lightblue"

  }
  return (
    <div>
      <form style={formStyle}>
        <input
          type='text'
          id='title'
          placeholder='Tweet Title'/>
        <br></br>
        <br></br>
        <textarea
          id='body'
          placeholder='Your tweet goes here.'/>
          <br></br>
        <button type='submit'>Tweet it!</button>
      </form>
    </div>
  );
}

export default NewTweetForm;
