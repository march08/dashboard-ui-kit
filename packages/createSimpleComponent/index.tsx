// for components that just needs styling

import * as React from 'react';
import classnames from 'classnames';

import { AnyTag, PropsWithTagProps } from '@duik/core';
import { JSXElement } from '@babel/types';

type Props = {
  displayName: string,
  className?: string,
};

export type CreateSimpleComponentProps = {
  defaultProps?: Props,
} & Props;

export type ComponentProps = React.PropsWithChildren<{
  className?: string,
}>;






export function createSimpleComponent<T extends AnyTag>(
  options: { Component?: T } & PropsWithTagProps<T, CreateSimpleComponentProps>
) {

  const {
    displayName,
    className: defaultClassName,
    Component,
    defaultProps,
  } = options


  function SimpleComponent<Tag extends AnyTag>(props: PropsWithTagProps<Tag>): JSX.Element {
    const { className, children, ...rest } = props;
    return (
      <Component
        className={
          classnames(
            defaultClassName,
            className,
          )
        }
        {...rest}
      >
        {children}
      </Component>
    );
  }

  SimpleComponent.defaultProps = {
    className: null,
    children: null,
    ...defaultProps,
  };

  SimpleComponent.displayName = displayName;

  return SimpleComponent;

}

export default createSimpleComponent;
