import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const ButtonText = styled.button`
  background-color: #ffffff79;
  color: ${prop => (prop.isActive ? '#1e293b' : '#334155')};
  font-family: 'Roboto';
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border-width: 0px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
  opacity: ${prop => (prop.isActive ? 1 : 0.5)};
  outline: none;
  cursor: pointer;
`
