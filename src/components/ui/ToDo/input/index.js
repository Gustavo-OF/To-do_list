import styled from "styled-components"

const Input = styled.input`
    width: 85%;
    height: 95%;
    background-color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    border-style: none;
    outline: none;
    color: ${props => (props.mode === "dark" ? "white" : "black") };
    float: right;
`

export { Input }