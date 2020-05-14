import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.className(),
  properties.children({
    prop: 'name',
    desc: 'Name, group conversation, ...',
  }),
  {
    prop: 'imgUrl',
    propType: 'string | string[]',
    desc: 'URL or multiple URLs to the image to be displayed',
  },
  {
    prop: 'avatarPlaceholder',
    propType: (
      <>
        {`{`} color: <Link to="/docs/react/styleguide">THEME_COLOR</Link>,
        content: React.ReactNode {`}`}
      </>
    ),
    desc: 'Placeholder if image is not available',
  },
  properties.children({
    prop: 'textBottom',
    desc: 'Any (text) node, such as title, ...',
  }),
  properties.children({
    prop: 'textTop',
    desc: 'Any (text) node, such as title, ...',
  }),
  properties.children({
    prop: 'rightEl',
    desc: 'Element to be displayed on the right side of the Avatar',
  }),
  properties.children({
    prop: 'leftEl',
    desc: 'Element to be displayed on the left side of the Avatar',
  }),
  properties.bool({
    prop: 'sm',
    desc: 'Renders smaller avatar with height 28px',
  }),
  properties.bool({
    prop: 'lg',
    desc: 'Renders larger avatar with height 60px',
  }),
  properties.bool({
    prop: 'xl',
    desc: 'Renders larger avatar with height 80px',
  }),
  properties.bool({
    prop: 'xxl',
    desc: 'Renders larger avatar with height 100px',
  }),
  properties.bool({
    prop: 'jumbo',
    desc: 'Renders larger avatar with height 120px',
  }),
  properties.rest(),
];

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsButton;
