import * as React from 'react'
import classnames from 'classnames'

import { AvatarImageSingle, AvatarImageMulti } from './AvatarImage'

import './styles.scss'

export * from './AvatarImage'

export type AvatarPlaceholderProps = {
  content?: React.ReactNode,
  color?: 'green' | 'blue' | 'orange' | 'indigo' | 'red' | 'yellow',
}

export type AvatarProps = JSX.IntrinsicElements['span'] & {
  name?: React.ReactNode,
  imgUrl?: string | string[],
  avatarPlaceholder?: AvatarPlaceholderProps,
  textTop?: React.ReactNode,
  textBottom?: React.ReactNode,
  rightEl?: React.ReactNode,
  leftEl?: React.ReactNode,
  sm?: boolean,
  lg?: boolean,
  xl?: boolean,
  xxl?: boolean,
  jumbo?: boolean,
}

export const Avatar = ({
  name,
  imgUrl,
  avatarPlaceholder,
  textTop,
  className,
  rightEl,
  leftEl,
  textBottom,
  sm,
  lg,
  xl,
  xxl,
  jumbo,
  ...rest
}: AvatarProps) => (
    <span
      className={classnames('avatar', className, {
        ['avatar-sm']: sm,
        ['avatar-lg']: lg,
        ['avatar-xl']: xl,
        ['avatar-xxl']: xxl,
        ['avatar-jumbo']: jumbo,
      })}
      {...rest}
    >
      <span className={classnames('avatar-image-wrapper')}>
        {
          imgUrl ? (
            Array.isArray(imgUrl) ? (
              <AvatarImageMulti imgUrl={imgUrl} />
            ) : (
                <AvatarImageSingle imgUrl={imgUrl} />
              )
          ) : (
              <span className={classnames('avatar-placeholder', avatarPlaceholder && {
                [`bg-${avatarPlaceholder.color}`]: avatarPlaceholder.color
              })}
              >
                {avatarPlaceholder && avatarPlaceholder.content}
              </span>
            )
        }
        {rightEl && (
          <span className={'avatar-right-el'}>
            {rightEl}
          </span>
        )}
        {leftEl && (
          <span className={'avatar-left-el'}>
            {leftEl}
          </span>
        )}
      </span>
      {
        (name || textTop || textBottom) && (
          <span className={'avatar-content'}>
            {textTop && (
              <span className={'avatar-text-top'}>
                {textTop}
              </span>
            )}
            {name && (
              <span className={'avatar-name'}>
                {name}
              </span>
            )}
            {textBottom && (
              <span className={'avatar-text-bottom'}>
                {textBottom}
              </span>
            )}
          </span>
        )
      }
    </span>
  )

Avatar.displayName = 'Avatar'

export default Avatar
