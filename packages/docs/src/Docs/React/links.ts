import { camelToSnake, camelToText } from 'utils'
import { RouteComponentProps } from 'react-router-dom'

export type ComponentType = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>

export type GeneratedLinkData = {
  text: string,
  to: string,
  component: RouteComponentProps, // eslint-disable-line
}
const form = [
  'Checkbox',
  'Toggle',
  'Radio',
  'TextField'
]

const components = [
  'Button',
  'ButtonGroup',
  'Icon',
  'Dropdown',
]
const guides = [
  'UseInCreateReactApp',
  'UseWithTypescript',
  'CustomizingTheme'
]
const utilityComponents = [
  'OuterEventsHandler',
]

function generateLinks(list: string[]): GeneratedLinkData[] {
  return list
    .sort()
    .map((item: string) => {
      return {
        text: camelToText(item),
        to: `/${camelToSnake(item)}`,
        component: require(`./${item}`).default as RouteComponentProps, // eslint-disable-line
      }
    })
}

export const generateMenuLinks = () => ([
  {
    title: 'Guides',
    links: generateLinks(guides)
  },
  {
    title: 'Basic Components',
    links: generateLinks(components)
  },
  {
    title: 'Form',
    links: generateLinks(form)
  },
  {
    title: 'Utility Components',
    links: generateLinks(utilityComponents)
  }
])

export default generateMenuLinks()
