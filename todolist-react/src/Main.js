import React, { useState } from 'react';

export default function Main() {
    const [taskname, settasknam]=useState('')
    const[tasklist, settasklist]=useState([])
    function addtask()
    {
        settasklist([...tasklist, taskname])
    }
const tasklistcontent = tasklist.map((task)=>{
    
})
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1> Todo List React App </h1>
                        <input type="text" placeholder='Enter task' className='form-control' value={taskname} onChange={(e)=>{settasknam(e.target.value)}} />
                            <button className="btn btn-success" onClick={addtask}>ADD</button>
                </div>
            </div>
        </div>
    )
}
