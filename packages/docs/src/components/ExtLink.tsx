import React from 'react';

type ExtLinkProps = JSX.IntrinsicElements['a'];

export const ExtLink = (props: ExtLinkProps) => {
  const { children } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};
