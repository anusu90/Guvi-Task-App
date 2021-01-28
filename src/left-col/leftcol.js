import React from 'react'

function LeftCol(props) {

    const changeSelectedDay = (individualDays) => {
        // console.log(individualDays.dayID);
        props.setselectedDay(individualDays)
    }

    const addDay = () => {

        let countOfDays = props.day.length;

        let newDay = {
            dayTitle: `Day-${countOfDays + 1}`,
            dayID: countOfDays + 1,
            taskList: [

            ]
        }

        props.setDay([...props.day, newDay]);

    }

    const removeDay = (individualDays) => {
        props.day.splice(props.day.indexOf(individualDays), 1);
        props.setDay([...props.day])
        console.log(props.day)
    }

    return (
        <div className="col-lg-4 text-center">
            <h1> DAYS</h1>
            <button className="btn btn-primary mainBtn" onClick={addDay}> Add Day </button>

            {
                props.day.map((individualDays) => {
                    return (
                        <div className="row">

                            <div className="col-8">
                                <button className="dayBtn" onClick={() => { changeSelectedDay(individualDays) }}>
                                    {individualDays.dayTitle}
                                </button>
                            </div>

                            <div className="col-4">

                                <button className="btn btn-danger" onClick={() => removeDay(individualDays)}>X</button>

                            </div>

                            {/* <div className="col-6">
                                <button className="btn btn-primary" onClick={() => { changeSelectedDay(individualDays) }}> Add Task </button>

                            </div> */}

                        </div>
                    )
                })
            }


        </div>
    )
}

export default LeftCol