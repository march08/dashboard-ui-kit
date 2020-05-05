import React from 'react';

import { Checkbox } from '@duik/it';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import TopBarTitle from '../components/TopBarTitle';

import cls from './styleguide-checkboxes.module.scss';

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle name="Checkbox" to="checkbox">
        {'Checkboxes'}
      </TopBarTitle>
      06
    </SectionTitle>
    <Content>
      <div className={cls.grid}>
        <Checkbox defaultChecked name="test" />
        <Checkbox name="test" />
        <Checkbox disabled name="test" />
        {/** r2 */}
        <Checkbox defaultChecked label="Martha Higerada" name="test" />
        <Checkbox label="Martha Higerada" name="test" />
        <Checkbox disabled label="Martha Higerada" name="test" />
        {/** r2 */}
        <Checkbox
          defaultChecked
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          label="Martha Higerada"
          name="test"
        />
        <Checkbox
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          label="Martha Higerada"
          name="test"
        />
        <Checkbox
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          disabled
          label="Martha Higerada"
          name="test"
        />
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideButtons;
