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
  'TextField',
  'TextArea'
]

const components = [
  'Button',
  'ButtonGroup',
  'Icon',
  'Dropdown',
  'Progress',
  'Avatar',
]
const layout = [
  'ContainerVertical',
  'ContainerHorizontal',
  'ScrollArea',
]
const nav = [
  'NavPanel',
  'NavLink',
  'NavTitle',
  'NavSection',
  'NavSectionTitle',
]

const cookbook = [
  'BuildingLayout',
  'BuildingNavPanel',
  'BuildingTopBar'
]
const guides = [
  'UseInCreateReactApp',
  'UseWithTypescript',
  'CustomizingTheme',
]
const utilityComponents = [
  'OuterEventsHandler',
]

function generateLinks(list: string[], isCamelToText: boolean = false): GeneratedLinkData[] {
  return list
    .sort()
    .map((item: string) => {
      return {
        text: isCamelToText ? camelToText(item) : item,
        to: `/${camelToSnake(item)}`,
        component: require(`./${item}`).default as RouteComponentProps, // eslint-disable-line
      }
    })
}

export const generateMenuLinks = () => ([
  {
    title: 'Guides',
    links: generateLinks(guides, true)
  },
  {
    title: 'Cookbook',
    links: generateLinks(cookbook, true)
  },
  {
    title: 'Basic Components',
    links: generateLinks(components)
  },
  {
    title: 'Form Components',
    links: generateLinks(form)
  },
  {
    title: 'Layout Components',
    links: generateLinks(layout)
  },
  {
    title: 'Side Navigation',
    links: generateLinks(nav)
  },
  {
    title: 'Utility Components',
    links: generateLinks(utilityComponents)
  }
])

export default generateMenuLinks()
