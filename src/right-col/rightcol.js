import React from 'react'

function RightCol(props) {
    return (
        <>
            <div className="col-lg-4" >
                <h1> TASK DETAILS </h1>
                <ul class="list-group">
                    <li class="list-group-item"><h4>Task Title</h4></li>
                    <li class="list-group-item"><h5>{(props.selectedTask) ? props.selectedTask.taskTitle : ""} </h5></li>
                    <li class="list-group-item"><h4>Task Discription</h4></li>
                    <li class="list-group-item"><h5>{(props.selectedTask) ? props.selectedTask.taskDesc : ""} </h5></li>
                </ul>
            </div>
        </>
    )
}

export default RightCol