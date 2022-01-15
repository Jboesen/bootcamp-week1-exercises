import styled from 'styled-components'

const SearchBar = styled.form`
margin-top: 5vh;
margin-bottom: 5vh;
display: flex;
align-content: center;
flex-direction: column;
align-items: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
`

const AddButton = styled.button`
display: block;
background-color: transparent;
border: none;
cursor: crosshair;
flex: 1 1 auto;


&:hover {
    color: lightseagreen;
  }
`
const ReminderBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`
const Reminder = styled.button`
  background: white;
  border-right : 2px;
  border-left: 2px;
  border-radius: 2px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  width: 50%;
  height: auto;
  flex: 'flex-grow';

  &:hover {
    color: lightskyblue;
  }
`
export { AddButton, SearchBar, Reminder, ReminderBox }