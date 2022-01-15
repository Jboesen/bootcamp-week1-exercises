import styled from 'styled-components'

export const ReminderBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`
export const Reminder = styled.button`
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
