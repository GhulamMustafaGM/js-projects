import React from 'react';

export default function Main() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1>Validation Form</h1>
                    
                    <input type="text" placeholder="username" className="form-control" />
                    <input type="text" placeholder="email" className="form-control" />
                    <input type="text" placeholder="password" className="form-control" />
                    <input type="text" placeholder="confirm password" className="form-control" />
                    <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}