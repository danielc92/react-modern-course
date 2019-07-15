// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


// create component
const App = () => {

    const image = faker.image.avatar()
    console.log(image);

    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
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

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
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

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
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