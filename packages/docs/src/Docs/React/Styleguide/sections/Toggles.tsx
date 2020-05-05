import React from 'react';

import { Toggle } from '@duik/it';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import TopBarTitle from '../components/TopBarTitle';

import cls from './styleguide-checkboxes.module.scss';

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle name="Toggle" to="toggle">
        {'Toggles'}
      </TopBarTitle>
      08
    </SectionTitle>
    <Content>
      <div className={cls.grid}>
        <Toggle defaultChecked name="test" />
        <Toggle name="test" />
        <Toggle disabled name="test" />
        {/** r2 */}
        <Toggle defaultChecked label="Publicly Available" name="test" />
        <Toggle label="Publicly Available" name="test" />
        <Toggle disabled label="Publicly Available" name="test" />
        {/** r2 */}
        <Toggle
          defaultChecked
          description="Allow anyone to message me about work."
          label="Publicly Available"
          name="test"
        />
        <Toggle
          description="Allow anyone to message me about work."
          label="Publicly Available"
          name="test"
        />
        <Toggle
          description="Allow anyone to message me about work."
          disabled
          label="Publicly Available"
          name="test"
        />
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideButtons;
