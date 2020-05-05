import * as React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
  NavLink as RRNavLink
} from 'react-router-dom';
import {
  NavPanel,
  NavSection,
  NavLink,
  NavSectionTitle,
  NavTitle,
  ContainerHorizontal
} from '@duik/it';
import { PageScroll } from 'components';
import { Icon } from '@duik/icon';

import navSections, { GeneratedLinkData } from './links';

export const DocsReact = (props: RouteComponentProps) => {
  const { match, location } = props;

  return (
    <ContainerHorizontal style={{ overflow: 'hidden' }}>
      <NavPanel style={{ position: 'relative', zIndex: 10 }}>
        <NavTitle>React Docs</NavTitle>

        {navSections.map(section => (
          <NavSection key={section.title}>
            <NavSectionTitle>{section.title}</NavSectionTitle>
            {section.links.map(item => {
              return (
                <NavLink
                  to={`${match.path}${item.to}`}
                  Component={RRNavLink}
                  // pill
                  key={item.to}
                  rightEl={<Icon>arrow_right</Icon>}
                  highlighted
                >
                  {item.text}
                </NavLink>
              );
            })}
          </NavSection>
        ))}
      </NavPanel>
      <PageScroll key={location.pathname}>
        <Switch>
          {navSections
            .reduce((res: GeneratedLinkData[], next) => {
              return [...res, ...next.links];
            }, [])
            .map(item => {
              return (
                <Route
                  key={item.to}
                  path={`${match.path}${item.to}`}
                  component={item.component as any}
                />
              );
            })}
          <Redirect to={`${match.path}/styleguide`} />
        </Switch>
      </PageScroll>
    </ContainerHorizontal>
  );
};

export default DocsReact;
