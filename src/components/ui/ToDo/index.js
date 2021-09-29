import styled from "styled-components";
import dark from "../images/bg-desktop-dark.jpg"
import light from "../images/bg-desktop-light.jpg"

const Background = styled.div`
    height: 18.5rem;
    width: 101.1%;
    background-repeat: no-repeat;
    background-image: url(${props => (props.mode === "dark" ? dark : light) });
    margin-left: -0.6%;
    margin-top:-1%;
    @media(max-width: 800px) {
        width: 101%;
        display: flex;
        flex-direction: column;
        position: relative;
        height: 18.5rem;
  }
`

const Banner = styled.div`
    height: 10%;
    width: 34%;
    //border: 1px solid red;
    position: absolute;
    top: 9%;
    left: 32%;
    @media(max-width: 800px) {
        height: 25%;
        width: 96%;
        flex-direction: column;
        position: relative;
        margin-left: -30%
  }
    
`
const AddTasks = styled.div`
    width: 34%;
    height: auto;
    position: absolute;
    left: 32%;
    display: flex;
    margin-top: -9%;
    //border: 1px solid red;
    @media(max-width: 800px) {
        height: 25%;
        width: 76%;
        flex-direction: column;
        position: absolute;
        margin-left: -20%;
        margin-top: -40%;
  }
`

const Footer = styled.div`
    width: 101.1%;
    height: 30.7rem;
    //border: 1px solid red;
    background-color: #181824;
    margin-left: -0.6%;
`
const InputDiv = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    border-style: none;
    outline: none;
    //border: 1px solid red;
`
const TasksDiv = styled.div`
    width: 34%;
    height: auto;
    position: absolute;
    left: 32%;
    display: flex;
    //border: 1px solid red;
    margin-top: -3%;
    display: inline-block;
    @media(max-width: 800px) {
        height: 25%;
        width: 76%;
        flex-direction: column;
        position: absolute;
        margin-left: -20%;
        margin-top: -15%;
  }
`

const Tasks = styled.div`
    width: 100%;
    height: 3rem auto;
    //border: 1px solid red;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    margin-top: -1.6%;
    @media(max-width: 800px) {
        height: 25%;
        width: 100%;
        flex-direction: column;
        margin-top: 0.15%
  }
`

const Actions = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    margin-top: -1.5%;
    display: inline-block;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    @media(max-width: 800px) {
        height: 25%;
        width: 100%;
        flex-direction: row;
        display: none;
  }
`

const ActionsMobile = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    margin-top: -1.5%;
    display: inline-block;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    display: none;
    @media(max-width: 800px) {
        display: block;
  }

`

const SortMobile = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    margin-top: 15%;
    margin-left: -21%;
    display: inline-block;
    text-align: center;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    @media(max-width: 800px) {
        margin-top: 25%;
        margin-left: -31%;
  }
`


const Hr = styled.hr`
   height: 0px;
    border: none;
    border-top: 1px solid black;
`

export { 
    Background, 
    Footer, 
    Banner,
    AddTasks,
    InputDiv,
    TasksDiv,
    Tasks,
    Hr,
    Actions,
    ActionsMobile,
    SortMobile
}