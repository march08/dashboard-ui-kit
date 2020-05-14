import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classnames from 'classnames';

import cls from './page-scroll.module.scss';

export type PageScroll = JSX.IntrinsicElements['div'];

const PageScrollBase = (props: PageScroll & RouteComponentProps) => {
  const { history, staticContext, match, location, className, ...rest } = props;

  const ref = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    if (location.hash) {
      const targetEl = document.getElementById(location.hash.replace('#', ''));

      if (targetEl && ref.current) {
        const targetRect = targetEl.getBoundingClientRect();
        ref.current.scrollTo(0, ref.current.scrollTop + targetRect.top - 50);
      }
    }
  }, [location.key, location.hash, ref]);

  return (
    <div
      ref={ref}
      {...rest}
      className={classnames(cls.pagescroll, className)}
    />
  );
};

export const PageScroll = withRouter(PageScrollBase);
