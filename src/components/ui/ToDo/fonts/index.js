import styled from "styled-components";
import "@fontsource/josefin-sans";

const H2 = styled.h2`
    color: ${props => (props.mode === "dark" ? "#25273c" : "#fafafa") };
    font-size: 30px;
    font-family: Josefin Sans;
    float: left;
`
const H3 = styled.h3`
    text-align: left;
    margin: -9.5% 2% 2% 14%;
    font-family: Josefin Sans;
    font-weight: 400;
    color: ${props => (props.mode === "dark" ? "#fafafa" : "#25273c") };
    padding:3.5% 0 0% 0%;
    @media(max-width: 800px) {
        height: 25%;
        width: 76%;
        flex-direction: column;
        position: absolute;
        margin-top: -14%;
        margin-left: 18%;
  }
`
const H5 = styled.h5    `
    text-align: left;
    font-family: Josefin Sans;
    color: grey;
    display: inline-block;
    padding: 1% 4% 0% 4%;

`

export { H2,H3,H5 }