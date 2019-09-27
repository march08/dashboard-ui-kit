import React from 'react';
import { Helmet } from 'react-helmet';

export const H1 = (
  props: JSX.IntrinsicElements['h1'] & { metaTitle?: string },
) => {
  const { children, metaTitle, ...rest } = props;
  return (
    <>
      {(typeof children === 'string' || metaTitle) && (
        <Helmet>
          <title>{typeof children === 'string' ? children : metaTitle}</title>
        </Helmet>
      )}
      <h1 {...rest}>{children}</h1>
    </>
  );
};
