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
  'TextArea',
  'Select'
]

const components = [
  'Button',
  'ButtonGroup',
  'Icon',
  'Dropdown',
  'Progress',
  'Avatar',
  'Alert',
]
const layout = [
  'ContainerVertical',
  'ContainerHorizontal',
  'ScrollArea',
]

const topBar = [
  'TopBar',
  'TopBarLink',
  'TopBarLinkContainer',
  'TopBarTitle',
  'TopBarSection',
]
const nav = [
  'NavPanel',
  'NavLink',
  'NavTitle',
  'NavSection',
  'NavSectionTitle',
]
const tabNav = [
  'Tabs',
  'TabItem',
]

const cookbook = [
  'BuildingLayout',
  'BuildingNavPanel',
  'BuildingTopBar',
  'BuildingTabNavigation',
  'ComponentProperty'
]
const guides = [
  'UseWithTypescript',
  'Overview',
  'Theming',
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
    title: 'Top Bar',
    links: generateLinks(topBar)
  },
  {
    title: 'Side Navigation',
    links: generateLinks(nav)
  },
  {
    title: 'Tab Navigation',
    links: generateLinks(tabNav)
  },
  {
    title: 'Utility Components',
    links: generateLinks(utilityComponents)
  }
])

export default generateMenuLinks()
