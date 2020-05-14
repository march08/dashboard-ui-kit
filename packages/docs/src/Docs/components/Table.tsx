import * as React from 'react';
import cls from './docspage.module.scss';
import { Widget, WidgetTable } from '@duik/it/index';

export type DocsTableProps = {
  children: React.ReactNode;
  fixed?: boolean;
};

export const DocsTable = (props: DocsTableProps) => {
  const { children } = props;

  return (
    <Widget className={cls.propTable}>
      <WidgetTable style={{ fontFamily: "'Roboto Mono', monospace" }}>
        {children}
      </WidgetTable>
    </Widget>
  );
};
