//  Importações do React.
import { React, Fragment, useState, useEffect } from "react";
//  Fim importações do React.

//  Importação do ícone de Radio Button do Mui.
import { Radio } from "@material-ui/core"
//  Fim importação do ícone.

//  Importação dos estilos.
import {
    Background,
    Footer,
    Banner,
    AddTasks,
    InputDiv,
    TasksDiv,
    Tasks,
    Hr,
    Actions
} from "./ui/ToDo/";
import { H2, H3, H5 } from "./ui/ToDo/fonts";
import { Input } from "./ui/ToDo/input"
import { ReactComponent as SunIcon } from "./ui/icons/icon-sun.svg";
import { ReactComponent as MoonIcon } from "./ui/icons/icon-moon.svg";
//  Fim importações dos estilos.

//  Importações das funcionalidades da tarefa. 
import { sortBy } from "./useCases/sortTasksBy"
import { removeCompletedTasks } from "./useCases/removeAllCompletedTasks";
import { markCompleteTask } from "./useCases/completeTask";
import { addTask } from "./useCases/addTask";
//  Fim importação das funcionalidades.

//  Inicia o array de tarefas.
let tasks = [];


function ToDoDay() {
    
    const [radioValue, setRadioValue] = useState(false);
    //  Estado para mudar o layout (claro e escuro)
    const [mode, setMode] = useState("light")
    //  Captura o que o usuário digitou no nome da tarefa
    const [textValue, setTextValue] = useState("");
    //  ID de cada tarefa também é um estado que incrementa a cada tarefa adicionada.
    const [id, setId] = useState(0);
    //  Estado que será atualizado de acordo com o array "tasks".
    const [toDos, setToDos] = useState([]);

    /**
     * Realiza o tratamento da ação de filtrar as tarefas e atualiza
     * o estado.
     * @param {String} query 
     */
    function handleSortBy(query) {
        let filtered = sortBy(query, tasks)
        setToDos([...filtered])
    }
    /**
     * Realiza o tratamento da açao de remover todas as tarefas
     * marcadas como "completas" e atualiza o estado delas.
     */
    function handleAllCompletedTasks() {
        tasks = removeCompletedTasks(tasks)
        setToDos([...tasks])
    }
    /**
     * Realiza o tratamento da ação de marcar uma tarefa como completa.
     * Para identificar qual tarefa que será marcada, é passado por 
     * paramêtro o index da tarefa do array.
     * @param {Int} e 
     */
    function handleCompleteTask(e) {
        tasks = markCompleteTask(e, tasks)
        setId(id - 1);
        setToDos([...tasks])
    }
    /**
     * Recebe como paramêtro o array com as tarefas e faz a listagem delas, junto
     * com a ação de marcar a tarefa como completa. 
     * @param {Array} props 
     * @returns 
     */
    function ListItems(props) {
        return (
            <Fragment>
                {props.value[2]
                    ?
                    <Tasks>
                        <Radio
                            value={props.value[0]}
                            onClick={e => handleCompleteTask(e.target.value)} />
                        <H3><s>{props.value[1]}</s></H3>
                        <Hr />
                    </Tasks>
                    :
                    <Tasks>
                        <Radio
                            value={props.value[0]}
                            onClick={e => handleCompleteTask(e.target.value)} />
                        <H3>{props.value[1]}</H3>
                        <Hr />
                    </Tasks>
                }
            </Fragment>
        )
    }
    /**
     * Recebe como paramêtro o array inteiro, sem estar desestruturado, e faz a chamada 
     * do ListItems() para realizar a listagem, junto com as ações de filtro.
     * @param {*} props 
     * @returns 
     */
    function tasksList(props) {

        const listItems = props.map((index, i) =>
            <ListItems key={i} value={index}></ListItems>
        );


        const count = listItems.length;

        return (
            <TasksDiv>
                {listItems}
                {count > 0 &&
                    <Actions>
                        <H5>{count} items left</H5>
                        <H5 onClick={() => handleSortBy("all")}>All</H5>
                        <H5 onClick={() => handleSortBy()}>Active</H5>
                        <H5 onClick={() => handleSortBy("completed")}>Completed</H5>
                        <H5 onClick={() => handleAllCompletedTasks()}>Clear Completed</H5>

                    </Actions>
                }
            </TasksDiv>
        )
    }
    /**
     * Adiciona uma nova tarefa na lista de tarefas e atualiza o estado.
     * @param {String} value 
     * @param {Int} id 
     */
    function handleAddTask(value, id) {
        tasks = addTask(value, id, tasks)
        setToDos(tasks);
        setId(id + 1)
    }
    /**
     * UseEffect para atualizar a pagina toda vez que uma tarefa for atualizada.
     */
    useEffect(() => {
        setRadioValue(false);
    }, [radioValue]);

    return (
        <Fragment>
            <Background mode={mode}>
                <Banner>
                    <H2>T O D O</H2>
                    {mode === "dark"
                        ? <SunIcon onClick={() => setMode("light")} style={{ float: "right", marginTop: "5%" }}></SunIcon>
                        : <MoonIcon onClick={() => setMode("dark")} style={{ float: "right", marginTop: "5%" }}></MoonIcon>
                    }
                </Banner>
            </Background>
            <AddTasks>
                <InputDiv>
                    <Radio checked={radioValue} onClick={() => handleAddTask(textValue, id)} />
                    <Input onChange={e => setTextValue(e.target.value)} placeholder="Create a new task..." />
                </InputDiv>
            </AddTasks>
            {tasks !== [] ? tasksList(toDos) : ""}
            <Footer></Footer>
        </Fragment>
    )
}

export { ToDoDay }