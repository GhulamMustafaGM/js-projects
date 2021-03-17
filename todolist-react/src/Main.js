import React from 'react';

export default function Main() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1> Todo List React App </h1>
                        <input type="text" placeholder='Enter task' className='form-control' />
                            <button className="btn btn-success">ADD</button>
                </div>
            </div>
        </div>
    )
}
