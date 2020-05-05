import React from 'react';

import { Button } from '@duik/it';
import { Icon } from '@duik/icon';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import ComponentTitle from '../components/ComponentTitle';
import TopBarTitle from '../components/TopBarTitle';

import cls from './styleguide-buttons.module.scss';

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle name="Button" to="button">
        Buttons
      </TopBarTitle>
      03
    </SectionTitle>
    <Content>
      <div className={cls.groupDivider}>
        <div>
          <ComponentTitle>With Border</ComponentTitle>
          <div className={cls.btnGroup}>
            <Button>Click</Button>
            <Button transparent>Click</Button>
            <Button primary>Click</Button>
            <Button success>Click</Button>
            <Button error>Click</Button>
            <Button transparent>Click</Button>
          </div>
        </div>
        <div>
          <ComponentTitle>Without Border</ComponentTitle>
          <div className={cls.btnGroup}>
            <Button dark noBorder>
              Click
            </Button>
            <Button noBorder primary>
              Click
            </Button>
            <Button noBorder success>
              Click
            </Button>
            <Button noBorder>Click</Button>
            <Button error noBorder>
              Click
            </Button>
          </div>
        </div>
        <div>
          <ComponentTitle>With Icon (Sample)</ComponentTitle>
          <div className={cls.btnGroup}>
            <Button primary>
              <Icon mr>shopping_bag</Icon>
              Add to cart
            </Button>
            <Button success>
              <Icon mr>shopping_bag</Icon>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideButtons;
