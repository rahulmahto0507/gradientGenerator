import {ListItem, ButtonText} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    gradientDirectionsListDetails,
    isActive,
    clickGradientDirectionItem,
  } = props
  const {displayText, value} = gradientDirectionsListDetails
  const onClickButton = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <ButtonText type="button" isActive={isActive} onClick={onClickButton}>
        {displayText}
      </ButtonText>
    </ListItem>
  )
}
export default GradientDirectionItem
