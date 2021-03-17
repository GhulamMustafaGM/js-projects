import React from 'react';

export default function Main() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1> Todo List React App </h1>
                        <input type="text" placeholder='Enter task' className='form-control' />
                            <button className="btn btn-success">ADD</button>
                </div>
            </div>
        </div>
    )
}