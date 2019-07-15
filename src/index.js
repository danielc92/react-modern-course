// import libraries
import React from 'react';
import ReactDOM from 'react-dom';


// crete component
class App extends React.Component {
    render () {
        return (
            <div>
                <h3>App Name</h3>
            </div>
        )
    }
}


// take component and render
ReactDOM.render(<App/>, document.getElementById('root'))