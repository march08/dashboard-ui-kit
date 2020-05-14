import { camelToSnake, camelToText, createSortString } from 'utils';
import { RouteComponentProps } from 'react-router-dom';

export type ComponentType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;

export type GeneratedLinkData = {
  text: string;
  to: string;
  component: RouteComponentProps; // eslint-disable-line
};

const form = ['Checkbox', 'Toggle', 'Radio', 'TextField', 'TextArea', 'Select'];

const date = ['Datepicker', 'SelectDate'];

const components = [
  'Button',
  'ButtonGroup',
  'Icon',
  'Dropdown',
  'Progress',
  'Avatar',
  'Modal',
  'Alert',
];

const layout = ['ContainerVertical', 'ContainerHorizontal', 'ScrollArea'];

const topBar = [
  'TopBar',
  'TopBarLink',
  'TopBarLinkContainer',
  'TopBarTitle',
  'TopBarSection',
];
const nav = [
  'NavPanel',
  'NavLink',
  'NavTitle',
  'NavSection',
  'NavSectionTitle',
];
const tabNav = ['Tabs', 'TabItem'];

const cookbook = [
  'BuildingLayout',
  'BuildingNavPanel',
  'BuildingTopBar',
  'BuildingTabNavigation',
  'BuildingForms',
  'ComponentProperty',
];
const guides = [
  'Styleguide',
  'Overview',
  {
    label: 'Styling and Theming',
    file: 'Theming',
  },
  'Installation',
];
const utilityComponents = ['OuterEventsHandler'];

type Item = string | { label: string; file: string };

function generateLinks(
  list: Item[],
  isCamelToText: boolean = false
): GeneratedLinkData[] {
  return list
    .map((item: Item) => {
      if (typeof item === 'string') {
        return {
          text: isCamelToText ? camelToText(item) : item,
          to: `/${camelToSnake(item)}`,
          component: require(`./${item}`).default as RouteComponentProps, // eslint-disable-line
        };
      }
      return {
        text: isCamelToText ? camelToText(item.label) : item.label,
        to: `/${camelToSnake(item.file)}`,
        component: require(`./${item.file}`).default as RouteComponentProps, // eslint-disable-line
      };
    })
    .sort(createSortString('text'));
}

export const generateMenuLinks = () => [
  {
    title: 'Guides',
    links: generateLinks(guides, true),
  },
  {
    title: 'Cookbook',
    links: generateLinks(cookbook, true),
  },
  {
    title: 'Basic Components',
    links: generateLinks(components),
  },
  {
    title: 'Form Components',
    links: generateLinks(form),
  },
  {
    title: 'Date',
    links: generateLinks(date),
  },
  {
    title: 'Layout Components',
    links: generateLinks(layout),
  },
  {
    title: 'Top Bar',
    links: generateLinks(topBar),
  },
  {
    title: 'Side Navigation',
    links: generateLinks(nav),
  },
  {
    title: 'Tab Navigation',
    links: generateLinks(tabNav),
  },
  {
    title: 'Utility Components',
    links: generateLinks(utilityComponents),
  },
];

export default generateMenuLinks();
