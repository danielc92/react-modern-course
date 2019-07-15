// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


// create component
const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail/>
        </div>
    )
}


// take component and render
ReactDOM.render(<App/>, document.getElementById('root'))