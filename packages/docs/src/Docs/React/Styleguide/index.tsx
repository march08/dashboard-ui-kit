import React from 'react';

import SectionTitle from './components/TopBar';
import Content from './components/Content';
import ColorScheme from './components/ColorScheme';
import { H1 } from 'components';

import cls from './styleguide.module.scss';

import SectionButtons from './sections/Buttons';
import SectionAvatars from './sections/Avatars';
import SectionInputs from './sections/Inputs';
import SectionCheckboxes from './sections/Checkboxes';
import SectionToggles from './sections/Toggles';
import SectionRadios from './sections/Radios';
import SectionTypography from './sections/Typography';
import { DocsContentPage, PageContent } from 'Docs/components';
import { TopBarTitle } from '@duik/it';

const DocsStyleguide = () => (
  <DocsContentPage className={cls.page}>
    <PageContent
      data={[
        { id: 'basics', label: 'Basic Usage' },
        { id: 'labels', label: 'Styling' },
        { id: 'searchable', label: 'Enable Search Functionality' },
        { id: 'multi', label: 'Multi Select' },
        { id: 'option-props', label: 'Option Properties' },
        { id: 'activeOption', label: 'ActiveOption structure' },
        { id: 'props', label: 'Props' },
      ]}
    />
    <H1>Dashboard UI Kit Styleguide</H1>
    <SectionTitle>
      <TopBarTitle>Colors</TopBarTitle>
      01
    </SectionTitle>
    <Content>
      <div className={cls.colorSchemeGrid}>
        <ColorScheme color="#1665D8" name="Blue" />
        <ColorScheme color="#38B249" name="Green" />
        <ColorScheme color="#6977FF" name="Violet" />
        <ColorScheme color="#E6492D" name="Red" />
        <ColorScheme color="#F6AB2F" name="Orange" />
        <ColorScheme color="#FACF55" name="Yellow" />
      </div>
      <div className={cls.colorSchemeGridSmall}>
        <ColorScheme
          color="#3E3F42"
          isSpreaded={false}
          name="Main Text Color"
        />
        <ColorScheme
          color="#6B6C6F"
          isSpreaded={false}
          name="Secondary Text Color"
        />
        <ColorScheme color="#9EA0A5" name="Icon Style" />
        <ColorScheme color="#BCBCBC" name="Grey 50% / Tertiary Text Colour" />
        <ColorScheme color="#FFFFFF" name="White" />
      </div>
    </Content>
    <SectionTypography />
    <SectionButtons />
    <SectionAvatars />
    <SectionInputs />
    <SectionCheckboxes />
    <SectionRadios />
    <SectionToggles />
  </DocsContentPage>
);

export default DocsStyleguide;
