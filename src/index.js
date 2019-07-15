// import libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create component
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src="" alt="avatar"/>
                </a>
                <section className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">
                        Nice blog post
                    </div>
                </section>
            </div>
        </div>
    )
}


// take component and render
ReactDOM.render(<App/>, document.getElementById('root'))