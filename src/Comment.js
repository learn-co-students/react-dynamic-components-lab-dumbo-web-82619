// add Comment component here
import React, { Component } from 'react';

export default class Comment extends Component {
  
  render() {
    return (
      <div className="comment">
        <h2>{this.props.commentText}</h2>
        {/* <Comment /> */}
      </div>
    )   
  }
  
}