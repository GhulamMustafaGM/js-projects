import React, { useState } from 'react';

export default function Main() {
    const [taskname, settasknam]=useState('')
    const[tasklist, settasklist]=useState([])
    function addtask()
    {
        settasklist([...tasklist, taskname])
    }
const tasklistcontent = tasklist.map((task, index)=>{
    return (
        <div>
            <p>{task}</p>
            <i class="far fa-trash-alt" onClick={()=>deletetask(index)}></i>
        </div>
    )
})

function deletetask(index)
{
    var duparray = [...tasklist]
    duparray.splice(index, 1)
    settasklist(duparray)
}
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1> Todo List React App </h1>
                        <input type="text" placeholder='Enter task' className='form-control' value={taskname} onChange={(e)=>{settasknam(e.target.value)}} />
                            <button className="btn btn-success" onClick={addtask}>ADD</button>

                            <br />
                            {tasklistcontent}
                </div>
            </div>
        </div>
    )
}
