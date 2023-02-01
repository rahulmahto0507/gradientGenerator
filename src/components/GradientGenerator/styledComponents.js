import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff79;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ededed;
`
export const ButtonList = styled.ul`
  display: flex;
`
export const PickColors = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ededed;
`
export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const ColorPickerContainer = styled.div`
  display: flex;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border-width: 0px;
  margin-top: 30px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`
