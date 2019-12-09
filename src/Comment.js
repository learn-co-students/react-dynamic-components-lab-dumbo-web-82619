//your code here
import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">{this.props.commentText}</div>
        )
    }
}

//This component is exported so that it can be imported to our BlogPost.js
export default Comment