import React from 'react'

function RightCol(props) {
    return (
        <>
            <div className="col-lg-4" >
                <h1> TASK DETAILS </h1>

                <h4>Task Title</h4>
                <h5>
                    {props.selectedTask.taskTitle}

                </h5>

                <h4>Task Discription</h4>
                <p>
                    {props.selectedTask.taskDesc}
                </p>

            </div>
        </>
    )
}

export default RightCol