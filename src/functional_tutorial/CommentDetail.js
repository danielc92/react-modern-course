import React from 'react';

const CommentDetail = (props) => {

  return (
    <React.Fragment>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.avatar} alt="avatar"/>
        </a>
        <section className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.postedAt}</span>
          </div>
          <div className="text">
            {props.commentText}
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default CommentDetail;