import './App.css';
import LeftCol from "./left-col/leftcol"
import MiddleCol from "./middle-col/middlecol"
import RightCol from "./right-col/rightcol"
import React, { useState } from 'react'


function App() {

  const [day, setDay] = useState(
    [
      {
        dayTitle: "Day-1",
        dayID: 1,
        taskList: [
          {
            taskID: 1,
            taskTitle: "11",
            taskDesc: "loren11"
          },
          {
            taskID: 2,
            taskTitle: "12",
            taskDesc: "loren12"
          },
        ]
      },
      {
        dayTitle: "Day-2",
        dayID: 2,
        taskList: [
          {
            taskID: 1,
            taskTitle: "21",
            taskDesc: "loren 21"
          }
        ]
      },
      {
        dayTitle: "Day-3",
        dayID: 3,
        taskList: [
          {
            taskID: 1,
            taskTitle: "31",
            taskDesc: "loren 3"
          },
          {
            taskID: 2,
            taskTitle: "32",
            taskDesc: "loren 334"
          }
        ]
      },
    ]);


  const [selectedDay, setselectedDay] = useState(day[0]);
  const [selectedTask, setSelectedTask] = useState({});

  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">

          <div className="row">

            <LeftCol day={day} setDay={setDay} setselectedDay={setselectedDay} />
            <MiddleCol selectedDay={selectedDay} setselectedDay={setselectedDay} day={day} setDay={setDay} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
            <RightCol selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
          </div>

        </div>

      </div>

    </div>

  );
}

export default App;
