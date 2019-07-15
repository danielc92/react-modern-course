// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
const {image} = faker;

// Create Component
const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail
        commentText={"Nice blog post!"}
        avatar={image.avatar()}
        author={'Duke'}
        postedAt={"Today at 4.45PM"}/>
      <CommentDetail
        commentText={"What is this?"}
        avatar={image.avatar()}
        author={'Lucy'}
        postedAt={"Today at 5.45PM"}/>
      <CommentDetail
        commentText={"I like the writing!"}
        avatar={image.avatar()}
        author={'Ruby'}
        postedAt={"Today at 6.15PM"}/>
      <CommentDetail
        commentText={"Cool blog post!"}
        avatar={image.avatar()}
        author={'Jay'}
        postedAt={"Today at 4.25PM"}/>
    </div>
  )
}

// take component and render
ReactDOM.render(
  <App/>, document.getElementById('root'))