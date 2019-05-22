import * as React from 'react'
import classnames from 'classnames'

import AvatarStatus from './AvatarStatus'
import { AvatarImageSingle, AvatarImageMulti } from './AvatarImage'

import cls from './avatar.module.scss'

type AvatarPlaceholderProps = {
  content?: React.ReactNode,
  color?: 'green' | 'blue' | 'orange' | 'violet' | 'red',
}

export type AvatarProps = {
  className?: String,
  name?: React.ReactNode,
  status?: React.ReactNode,
  imgUrl?: string | string[],
  textTop?: String,
  avatarPlaceholder?: AvatarPlaceholderProps,
  highlighted?: Boolean,
  textBottom?: React.ReactNode,
  actionIcon?: React.ReactNode,
  size?: 'small' | 'large' | 'larger' | 'extraLarge' | 'jumbo',
}

const Avatar = ({
  name,
  imgUrl,
  avatarPlaceholder,
  textTop,
  className,
  highlighted,
  actionIcon,
  status,
  size,
  textBottom,
  ...rest
}: AvatarProps) => (
    <span
      className={classnames(cls['avatar'], className, {
        [cls.highlighted]: highlighted,
      })}
      {...rest}
    >
      <div className={classnames(cls.avatarWrapper)}>
        {
          imgUrl ? (
            Array.isArray(imgUrl) ? (
              <AvatarImageMulti imgUrl={imgUrl} />
            ) : (
                <AvatarImageSingle imgUrl={imgUrl} />
              )
          ) : (
              <div className={classnames(cls.avatarPlaceholder)}
              >
                {avatarPlaceholder && avatarPlaceholder.content}
              </div>
            )
        }
        {
          actionIcon && (
            <div className={cls.avatarAction}>
              {actionIcon}
            </div>
          )
        }
      </div>
      {
        (name || textTop || textBottom) && (
          <div className={cls['avatar-content']}>
            {textTop && (
              <div className={cls['avatar-text-top']}>
                {textTop}
              </div>
            )}
            {name && (
              <div className={cls['avatar-name']}>
                {name}
              </div>
            )}
            {textBottom && (
              <div className={cls['avatar-text-bottom']}>
                {textBottom}
              </div>
            )}
          </div>
        )
      }
      {
        status && (
          <AvatarStatus status={status} />
        )
      }
    </span>
  )

Avatar.defaultProps = {
  className: null,
  name: null,
  textTop: null,
  actionIcon: null,
  highlighted: false,
  avatarPlaceholder: {},
  status: null,
  imgUrl: null,
  size: null,
  textBottom: null,
  Component: 'div',
}

export default Avatar
