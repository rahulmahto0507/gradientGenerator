import {Component} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  Description,
  ButtonList,
  PickColors,
  ColorPickerContainer,
  ColorInput,
  GenerateButton,
  CustomInputAndColorContainer,
  ColorValue,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = directionId => {
    this.setState({activeGradientDirection: directionId})
  }

  render() {
    const {
      activeGradientDirection,
      gradientValue,
      toColorInput,
      fromColorInput,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <ButtonList>
            {gradientDirectionsList.map(item => (
              <GradientDirectionItem
                key={item.directionId}
                gradientDirectionsListDetails={item}
                isActive={activeGradientDirection === item.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </ButtonList>
          <PickColors>Pick the Colors</PickColors>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <ColorInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColorInput}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <ColorInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColorInput}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </ContentContainer>
      </AppContainer>
    )
  }
}
export default GradientGenerator
