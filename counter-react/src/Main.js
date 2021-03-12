import React, {Component} from 'react';

class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h1>React Counter</h1>
                <h1>0</h1>
                <button className='btn btn-primary'>Increment</button>
                <button className='btn btn-info'>Decrement</button>
                <button className='btn btn-bg-secondary'>Neutral</button>
            </div>
        );
    }
}

export default Main;