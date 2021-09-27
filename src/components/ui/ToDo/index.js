import styled from "styled-components";
import image from "../images/bg-desktop-dark.jpg"

const BackgroundDay = styled.div`
    height: 18.5rem;
    width: 101.1%;
    background-repeat: no-repeat;
    background-image: url(${image});
    margin-left: -0.6%;
    margin-top:-1%;
`

const Banner = styled.div`
    height: 10%;
    width: 34%;
    //border: 1px solid red;
    position: absolute;
    top: 9%;
    left: 32%;
`
const AddTasks = styled.div`
    width: 34%;
    height: auto;
    position: absolute;
    left: 32%;
    display: flex;
    margin-top: -12%;
    //border: 1px solid red;
`

const Footer = styled.div`
    width: 101.1%;
    height: 27.7rem;
    //border: 1px solid red;
    background-color: #181824;
    margin-left: -0.6%;
`
const InputDiv = styled.div`
    width: 100%;
    height: auto;
    background-color: #25273c;
    border-style: none;
    outline: none;
    color: white;
    border-radius: 1%;    
`
const TasksDiv = styled.div`
    width: 34%;
    height: auto;
    position: absolute;
    left: 32%;
    display: flex;
    //border: 1px solid red;
    margin-top: -6%;
    display: inline-block;
`

const Tasks = styled.div`
    width: 100%;
    height: auto;
    //border: 1px solid red;
    background-color: #25273c;
    margin-top: -1.75%;
`

const Input = styled.input`
    width: 85%;
    height: 95%;
    background-color: #25273c;
    border-style: none;
    outline: none;
    color: white;
    float: right;
`
const Actions = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    margin-top: -1.75%;
    display: inline-block;
    background-color: #25273c;

`


const Hr = styled.hr`
   height: 0px;
    border: none;
    border-top: 1px solid black;
`

export { 
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
}