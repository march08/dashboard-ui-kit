import React from 'react';

import { TextField } from '@duik/it';

import { Icon } from '@duik/icon';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import TopBarTitle from '../components/TopBarTitle';

import cls from './styleguide-buttons.module.scss';

const DocsStyleguideTextFields = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle name="TextField" to="textfield">
        TextFields
      </TopBarTitle>
      05
    </SectionTitle>
    <Content>
      <div className={cls.inputGrid}>
        <TextField defaultValue="Value" label="Label" />
        <TextField defaultValue="ioowijrower" label="Label" type="password" />
        <TextField
          defaultValue="Value"
          leftEl={<Icon>search_left</Icon>}
          label="Label"
        />
        <TextField
          defaultValue="Click to focus"
          rightEl={<Icon>search_left</Icon>}
          label="Label"
        />
        <TextField label="Label" placeholder="Placeholder" />
        <TextField
          defaultValue="iuwhriuhwer"
          rightEl={<Icon>view_simple</Icon>}
          label="Label"
          type="password"
        />
        <TextField
          rightEl={<Icon>search_left</Icon>}
          label="Label"
          placeholder="Search"
        />
        <TextField
          errorMessage="There is an error!"
          rightEl={<Icon>search_left</Icon>}
          label="Label"
          placeholder="Search"
        />
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideTextFields;
