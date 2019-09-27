import React from 'react';
import { Icon } from '@duik/icon';
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenuPosition,
} from '@duik/it';

import { useLocalStorage } from 'utils';

import cls from './topbar.module.scss';
import { Helmet } from 'react-helmet';

export const DocsTopBar = () => {
  const [isDark, setDark] = useLocalStorage('@duik-theme', false);
  return (
    <TopBar className={cls.docsTopBar}>
      {isDark && (
        <>
          <style>{`body {
    --bg-main: #252529;
    --bg-base: #2c2c31;
    --border-color-base: #34343a;
    --border-color-main: #44444e;
    --border-color-highlight: #64646e;
    --text-base: #ccc;
    --text-main: #ddd;
    --text-tertiary: #666;
    }`}</style>
          <Helmet>
            <body data-dark-mode="true" />
          </Helmet>
        </>
      )}
      <TopBarSection>
        <TopBarTitle>Dashboard UI Kit</TopBarTitle>
      </TopBarSection>
      <TopBarSection>
        <Dropdown
          buttonProps={{
            clear: true,
            square: true,
          }}
          menuPosition={DropdownMenuPosition['bottom-left']}
          closeOnOptionClick
          buttonText={<Icon>view_simple</Icon>}
        >
          <DropdownItem
            onClick={() => {
              setDark(false);
            }}
          >
            Light Theme
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setDark(true);
            }}
          >
            Dark Theme
          </DropdownItem>
        </Dropdown>
        <Button
          Component="a"
          href="https://preview.dashboard-ui.com"
          target="_blank"
          clear
        >
          Apps Preview
        </Button>
        <Button
          Component="a"
          href="https://janlosert.com/store/dashboard-ui-kit-3.html"
          target="_blank"
          primary
        >
          Download Design Package
        </Button>
      </TopBarSection>
    </TopBar>
  );
};
