import React from 'react';

import { Radio } from '@duik/it';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import TopBarTitle from '../components/TopBarTitle';

import cls from './styleguide-checkboxes.module.scss';

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle name="Radio" to="radio">
        {'Radios'}
      </TopBarTitle>
      07
    </SectionTitle>
    <Content>
      <div className={cls.grid}>
        <Radio defaultChecked name="test" />
        <Radio name="test" />
        <Radio disabled name="test" />
        {/** r2 */}
        <Radio defaultChecked label="Opportunities" name="test2" />
        <Radio label="Opportunities" name="test2" />
        <Radio disabled label="Opportunities" name="test2" />
        {/** r2 */}
        <Radio
          defaultChecked
          description="Get a daily email when new coding jobs are posted."
          label="Opportunities"
          name="test3"
        />
        <Radio
          description="Get a daily email when new coding jobs are posted."
          label="Opportunities"
          name="test3"
        />
        <Radio
          description="Get a daily email when new coding jobs are posted."
          disabled
          label="Opportunities"
          name="test3"
        />
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideButtons;
