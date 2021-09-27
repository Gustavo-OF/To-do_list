import { React, Fragment, useState, useEffect } from "react";
import { Radio } from "@material-ui/core"

import {
    BackgroundDay,
    Footer,
    Banner,
    AddTasks,
    InputDiv,
    Input,
    TasksDiv,
    Tasks,
    Hr,
    Actions
} from "./ui/ToDo/";

import { H2, H3, H5 } from "./ui/ToDo/fonts";
import { ReactComponent as SunIcon } from "./ui/icons/icon-sun.svg"
import { Link } from "react-router-dom";

let tasks = [];

function ToDoDay() {

    const [radioValue, setRadioValue] = useState(false);
    const [mode, setMode] = useState("light")
    const [textValue, setTextValue] = useState("");
    const [id, setId] = useState(0);

    function disableTask(e) {
        if (!tasks[e].includes("disabled")) {
            tasks[e].push("disabled");
        }
    }

    function ListItems(props) {
        return (
            <Tasks>
                <Radio
                    value={props.value[0]} 
                    onClick={e => disableTask(e.target.value)} />
                {typeof (props.value[3]) !== undefined
                    ? <H3>{props.value[1]}</H3>
                    : <s><H3>{props.value[1]}</H3></s>
                }
                <Hr />
            </Tasks>
        )
    }

    function tasksList(props) {
        const listItems = props.map((index, i) =>
            <ListItems key={i} value={index}></ListItems>
        );
        return (
            <TasksDiv>
                {listItems}
                {listItems.length > 0 &&
                    <Actions>
                        <H5>{listItems.length} items left</H5>
                        <Link to="/">
                            <H5>All</H5>
                        </Link>
                        <Link to="/active">
                            <H5>Active</H5>
                        </Link>
                        <Link to="/completed">
                            <H5>Completed</H5>
                        </Link>
                    </Actions>
                }
            </TasksDiv>
        )
    }

    function addTask(value) {
        tasks[id] = [id, value];
        setId(id + 1)
        //console.log(tasks)
    }

    useEffect(() => {
        setRadioValue(false)
    }, [radioValue, mode]);

    return (
        <Fragment>
            <BackgroundDay>
                <Banner>
                    <H2>T O D O</H2>
                    <SunIcon onClick={e => setMode("dark")} style={{ float: "right", marginTop: "5%" }}></SunIcon>
                </Banner>
            </BackgroundDay>
            <AddTasks>
                <InputDiv>
                    <Radio checked={radioValue} onClick={e => addTask(textValue)} />
                    <Input onChange={e => setTextValue(e.target.value)} placeholder="Create a new task..." />
                </InputDiv>
            </AddTasks>
            {tasks !== [] ? tasksList(tasks) : ""}
            <Footer></Footer>
        </Fragment>
    )
}

export { ToDoDay }