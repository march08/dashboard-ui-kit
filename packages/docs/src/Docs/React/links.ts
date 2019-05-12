import { camelToSnake, camelToText } from 'utils'

const listOfComponents = [
  'Button',
  'ButtonGroup',
]

const generateLinks = () => listOfComponents.sort().map(item => {
  return {
    text: camelToText(item),
    to: `/${camelToSnake(item)}`,
    component: require(`./${item}`).default, // eslint-disable-line
  }
})

export default generateLinks()
