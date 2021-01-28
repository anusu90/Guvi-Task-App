import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';



function MiddleCol(props) {

    const [show, setShow] = useState(false);

    const [taskTitle, settaskTitle] = useState("");
    const [taskDiscription, settaskDiscription] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addTaskModal = (e) => {

        e.preventDefault();

        let countOfTasks = props.selectedDay.taskList.length
        let newTask = {
            taskID: countOfTasks + 1,
            taskTitle: taskTitle,
            taskDesc: taskDiscription
        }
        props.selectedDay.taskList.push(newTask);

        settaskTitle('');
        settaskDiscription('');

        handleClose();


        props.day[props.day.indexOf(props.selectedDay)] = props.selectedDay;
        props.setDay([...props.day]);
        props.setselectedDay(() => props.selectedDay);

        // return <InputModal></InputModal>
    }


    const addTask = (selectedDay) => {

        let countOfTasks = selectedDay.taskList.length
        let newTask = {
            taskID: countOfTasks + 1,
            taskTitle: `Task-${countOfTasks + 1}`,
            taskDesc: ""
        }
        selectedDay.taskList.push(newTask);


        props.day[props.day.indexOf(selectedDay)] = selectedDay;
        props.setDay([...props.day]);
        props.setselectedDay(selectedDay);

        // return <InputModal></InputModal>

    }


    const removeTask = (task) => {

        props.selectedDay.taskList.splice(props.selectedDay.taskList.indexOf(task), 1)

        props.day[props.day.indexOf(props.selectedDay)] = props.selectedDay;
        props.setDay([...props.day]);
        props.setselectedDay(() => props.selectedDay);

        props.setSelectedTask();

    }

    const showTask = (task) => {
        console.log(task)
        props.setSelectedTask(() => task);
    }


    return (

        <div className="col-lg-4  text-center">
            <h1>TASKS</h1>
            {/* <button className="btn btn-primary" onClick={() => { addTask(props.selectedDay) }}> Add Task </button> */}
            <button className="btn btn-primary mainBtn" onClick={handleShow}> Add Task</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" required={true} value={taskTitle} onChange={(e) => { settaskTitle(e.target.value) }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Task Discription</Form.Label>
                            <Form.Control as="textarea" rows={3} value={taskDiscription} onChange={(e) => { settaskDiscription(e.target.value) }} />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={(e) => addTaskModal(e)} >Add Task</Button>
                        <Button variant="danger" type="reset">Reset</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close</Button>
                </Modal.Footer>
            </Modal>

            <div>
                {
                    props.selectedDay.taskList.map(t => {
                        return (
                            <div className="row">
                                <div className="col-sm-8">
                                    <button className="taskBtn" onClick={() => { showTask(t) }}>
                                        {t.taskTitle}
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-danger" onClick={() => removeTask(t)}>X</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>




        </div>

    )
}

export default MiddleCol