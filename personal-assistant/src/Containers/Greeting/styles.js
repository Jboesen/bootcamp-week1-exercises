import styled from 'styled-components'


const GreetHeader = styled.h1`
margin: 0px;
text-align: center;
font-family: sans-serif;
`

const WeatherHeader = styled.h3`
text-align: center;
font-family: sans-serif;`

const ToPage = styled.a`
display: block;
background-color: transparent;
border: none;
cursor: crosshair;
text-decoration: none;
position:absolute;
width:100%;
bottom:0;
text-align:center;
font-family: sans-serif;

&:hover {
    color: forestgreen;
  }
`

export { GreetHeader, WeatherHeader, ToPage }
