import React, {Component} from 'react';

class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='row justify-content-center'>
                <div className='col-md-5' style={{ marginTop:'250px', border:'5px solid black' }}>
                    <h1>React Counter</h1>
                    <h1>0</h1>
                    <button className='btn btn-success'>Increment</button>
                    <button className='btn btn-danger'>Decrement</button>
                    <button className='btn btn-primary'>Neutral</button>
                </div>
            </div>
        );
    }
}

export default Main;